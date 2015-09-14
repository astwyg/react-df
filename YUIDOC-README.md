####################################注释规范#######################################

1.基本注释规范:

对于module, class, function应该采用/**…*/的方式进行注释, 分别说明其必要元素, 例如: 一个function应该说明其作用, 可以举例子(用@example修饰), 如需要, 也应该对其构造函数的全部变量进行解释, 格式为@param {type} name discription

2.内联注释:

对于比较复杂的写法, 或者重要的临时变量, 应该使用内联的方法进行注释(//), 避免发生看名字猜意思的情况.


###############################关于YUIdoc的注解说明#################################


1.使用

注释方法：YUI会自动识别  /** 这里的注解  */

/**
 * 
 * 这里填写相应标签
 *
 */

2.简单说明

Example moudle Block:

/**
 * 
 * This is the description for the module
 * 
 * @moudle MyModule
 * 
 */

ps.模块标注一般放在文件的最开头位置，如果一个模块有多个文件，那么需对每个文件的文件头都加上模块标注，以表明这些文件都属于同一个模块


Example Class Block：

/**
* This is the description for my class.
*
* @class MyClass
* 
*/


Example Method Block：

/**
* My method description.  Like other pieces of your comment blocks, 
* this can span multiple lines.
*
* @method methodName
* @param {String} foo Argument 1
* @param {Object} config A config object
* @param {String} config.name The name on the config object
* @param {Function} config.callback A callback function on the config object
* @param {Boolean} [extra=false] Do extra, optional work
* @return {Boolean} Returns true on success
*/



Example Property Block：

/**
* My property description.  Like other pieces of your comment blocks, 
* this can span multiple lines.
* 
* @property propertyName
* @type {Object}
* @default "foo"
*/


3.其他常用的注释

私有类   @private 
静态方法 @static
例  子   @example
作  者   @author XXXX


4.相关资料

1.YUIdoc主页：http://yui.github.io/yuidoc/
2.YUIdoc标签详细说明：http://yui.github.io/yuidoc/syntax/index.html
3.配置文件说明： http://yui.github.io/yuidoc/args/index.html#json
