$(function () {
    //BEGIN WRAP&SIDEBAR HEIGHT
    var sidebarHeight = $(window).height() - $(".page-header-topbar").height();
    $('#sidebar').css("height",sidebarHeight);
    $(window).on("load resize", function () {
        var sidebarHeight = $(window).height() - $(".page-header-topbar").height();
        $('#sidebar').css("height",sidebarHeight);
    });
    var contentHeight = $(window).height() - $(".page-header-topbar").height() - $(".page-title-breadcrumb").height();
    $('.page-content').css("height",contentHeight);
    $(window).on("load resize", function () {
        var contentHeight = $(window).height() - $(".page-header-topbar").height() - $(".page-title-breadcrumb").height();
        $('.page-content').css("height",contentHeight);
    });
    //END WRAP HEIGHT
    $.cookie('header','header-static');
    //BEGIN MENU SIDEBAR
    $('#side-menu').metisMenu();
    $(window).on("load resize", function () {
        if ($(this).width() < 768) {
            $('body').removeClass();
            $('div.sidebar-collapse').addClass('collapse');
        } else {
            $('div.sidebar-collapse').removeClass('collapse');
            $('div.sidebar-collapse').css('height', 'auto');
        }

        if($('#sidebar').height() > $('#page-wrapper').height()){
            $('#wrapper').css('height', $('#sidebar').height());
        }
    });
    //END MENU SIDEBAR


    // //BEGIN CHECKBOX & RADIO
    // $('input').iCheck({
    //     checkboxClass: 'icheckbox_square',
    //     radioClass: 'iradio_square',
    //     increaseArea: '20%' // optional
    // });
    // //END CHECKBOX & RADIO

    //BEGIN TOOTLIP
    $("[data-toggle='tooltip'], [data-hover='tooltip']").tooltip();
    //END TOOLTIP

    //BEGIN POPOVER
    $("[data-toggle='popover'], [data-hover='popover']").popover();
    //END POPOVER

    //BEGIN THEME SETTING
    $('#theme-setting > a.btn-theme-setting').click(function(){
        if($('#theme-setting').css('right') < '0'){
            $('#theme-setting').css('right', '0');
        } else {
            $('#theme-setting').css('right', '-250px');
        }
    });

    // Begin Change Theme Color
    var list_menu = $('.dropdown-theme-setting > li > select#list-menu');
    var list_style = $('.dropdown-theme-setting > li > select#list-style');
    var list_header = $('.dropdown-theme-setting > li > select#list-header');
    var list_color = $('.dropdown-theme-setting > li > ul#list-color > li');

    // FUNCTION CHANGE URL STYLE ON HEAD TAG
    var setTheme = function (menu_style, style, header, color) {
        $.cookie('menu_style', menu_style);
        $.cookie('style',style);
        $.cookie('header', header);
        $.cookie('color',color);

        
        $('body').removeClass();
        $('body').addClass(menu_style + ' ' + header);
        // Set slimscroll when sidebar fixed
        if ($.cookie('header') == 'header-fixed') {
            if ($('body').hasClass('sidebar-collapsed')) {
                $('#side-menu').attr('style','').parent('.slimScrollDiv').replaceWith($('#side-menu'));
            } else {
                setTimeout(function(){
                    $('#side-menu').slimScroll({
                        "height": $(window).height() - 100,
                        'width': '250px',
                        'wheelStep': 5
                    });
                    $('#side-menu').focus();
                }, 500)
            }
        } else {
            $('#side-menu').attr('style','').parent('.slimScrollDiv').replaceWith($('#side-menu'));
        }
        
        $('#theme-change').attr('href', 'static/theme/css/themes/'+ style + '/' + color + '.css');
    }
    // INITIALIZE THEME FROM COOKIE
    // --NOTES: HAVE TO SET VALUE FOR STYLE & COLOR BEFORE AND AFTER ACTIVE THEME
    // Check cookie when window reload and set value for each option(menu,style,color)
    if ($.cookie('style')) {
        // FIX SIDEBAR IN HORIZONTAL AND RIGHT
        if ($('body').hasClass('clear-cookie')) {
            $.removeCookie('menu_style');
        } else {
            list_menu.find('option').each(function(){
                if($(this).attr('value') == $.cookie('menu_style')) {
                    $(this).attr('selected', 'selected');
                }
            });
            
            list_style.find('option').each(function(){
                if($(this).attr('value') == $.cookie('style')) {
                    $(this).attr('selected', 'selected');
                }
            });

            list_header.find('option').each(function(){
                if($(this).attr('value') == $.cookie('header')) {
                    $(this).attr('selected', 'selected');
                }
            });

            list_color.removeClass("active");
            list_color.each(function(){
                if($(this).attr('data-color') == $.cookie('color')){
                    $(this).addClass('active');
                }
            });
            setTheme($.cookie('menu_style'), $.cookie('style'),$.cookie('header'), $.cookie('color'));
        }
    };

    // SELECT MENU STYLE EVENT
    list_menu.on('change', function(){
        list_color.each(function() {
            if($(this).hasClass('active')){
                color_active  = $(this).attr('data-color');
            }
        });
        // No Menu style 3 fixed
        if (($.cookie('header') == 'header-fixed') && ($(this).val() == 'sidebar-icons')) {
            setTheme($(this).val(), list_style.val(), 'header-static', color_active);
            return;
        }
        setTheme($(this).val(), list_style.val(), list_header.val(), color_active);
    });
    // SELECT STYLE EVENT
    list_style.on('change', function() {
        list_color.each(function() {
            if($(this).hasClass('active')){
                color_active  = $(this).attr('data-color');
            }
        });
        setTheme(list_menu.val(), $(this).val(), list_header.val(), color_active);
    });

    // SELECT HEADER EVENT
    list_header.on('change', function() {
        list_color.each(function() {
            if($(this).hasClass('active')){
                color_active  = $(this).attr('data-color');
            }
        });
        // No Menu style 3 fixed
        if (($.cookie('menu_style') == 'sidebar-icons') && ($(this).val() == 'header-fixed')) {
            return;
        }
        setTheme(list_menu.val(), list_style.val(), $(this).val(), color_active);
    });
    // LI CLICK EVENT
    list_color.on('click', function() {
        list_color.removeClass('active');
        $(this).addClass('active');
        setTheme(list_menu.val(), list_style.val(), list_header.val(), $(this).attr('data-color'));
    });
    // End Change Theme Color
    //END THEME SETTING


    //BEGIN FULL SCREEN
    $('.btn-fullscreen').click(function() {

        if (!document.fullscreenElement &&    // alternative standard method
            !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    });
    //END FULL SCREEN


    //BEGIN PORTLET
    $(".portlet").each(function(index, element) {
        var me = $(this);
        $(">.portlet-header>.tools>i", me).click(function(e){
            if($(this).hasClass('fa-chevron-up')){
                $(">.portlet-body", me).slideUp('fast');
                $(this).removeClass('fa-chevron-up').addClass('fa-chevron-down');
            }
            else if($(this).hasClass('fa-chevron-down')){
                $(">.portlet-body", me).slideDown('fast');
                $(this).removeClass('fa-chevron-down').addClass('fa-chevron-up');
            }
            else if($(this).hasClass('fa-cog')){
                //Show modal
            }
            else if($(this).hasClass('fa-refresh')){
                //$(">.portlet-body", me).hide();
                $(">.portlet-body", me).addClass('wait');

                setTimeout(function(){
                    //$(">.portlet-body>div", me).show();
                    $(">.portlet-body", me).removeClass('wait');
                }, 1000);
            }
            else if($(this).hasClass('fa-times')){
                me.remove();
            }
        });
    });
    //END PORTLET


    $('.option-demo').hover(function() {
        $(this).append("<div class='demo-layout animated fadeInUp'><i class='fa fa-magic mrs'></i>Demo</div>");
    }, function() {
        $('.demo-layout').remove();
    });
      $('#header-topbar-page .demo-layout').on('click', function() {
        var HtmlOption = $(this).parent().detach();
        $('#header-topbar-option-demo').html(HtmlOption).addClass('animated flash').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass('animated flash');
        });
        $('#header-topbar-option-demo').find('.demo-layout').remove();
        return false;
    });
    $('#title-breadcrumb-page .demo-layout').on('click', function() {
        var HtmlOption = $(this).parent().html();
        $('#title-breadcrumb-option-demo').html(HtmlOption).addClass('animated flash').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass('animated flash');
        });
        $('#title-breadcrumb-option-demo').find('.demo-layout').remove();
        return false;
    });


});



