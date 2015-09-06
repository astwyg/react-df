var moment = require('moment');
var numeral = require('numeral');
var config = require('../constants/config');
var Header = require('./header');
var TopBar = require('./top-bar');
var SideBar = require('./side-bar');
var DataGrid = require('./datagrid');
var ActionButtonAdd = require('./action-button-add');
var ActionButtonEdit = require('./action-button-edit');
var ActionButtonDelete = require('./action-button-delete');
var ActionButtonSearch = require('./action-button-search');
var ActionButtonSubmit = require('./action-button-submit');
var ActionButtonCancel = require('./action-button-Cancel');
var ActionButtonOpen = require('./action-button-open');
var PageSize = require('./pagesize');
var Pagination = require('./pagination');
var PortletHeader = require('./portlet-header');
var ToTop = require('./to-top');
var SearchPane = require('./search-pane');
var TimeTD = require('./table-cell-time');
var CurrencyTD = require('./table-cell-currency');
var DateTimePicker = require('./datetimepicker');
var Dropzone = require('./dropzone-upload');
var Select2 = require('./select2');
var Spinner = require('./spinner');
var Tree = require('./ui-tree');
var ErrorHandler = require('./error-handler');

// bootstrapping
(function bootstrap() {
  // set moment locale
  moment.locale('zh-cn');
  numeral.language('chs', config.numeral.language);
  numeral.language('chs');

}());


module.exports = {
  TopBar: TopBar,
  Header: Header,
  SideBar: SideBar,
  DataGrid: DataGrid,
  PortletHeader: PortletHeader,
  ActionButtonAdd: ActionButtonAdd,
  ActionButtonEdit: ActionButtonEdit,
  ActionButtonDelete: ActionButtonDelete,
  ActionButtonSearch: ActionButtonSearch,
  ActionButtonSubmit: ActionButtonSubmit,
  ActionButtonCancel: ActionButtonCancel,
  ActionButtonOpen: ActionButtonOpen,
  PageSize: PageSize,
  Pagination: Pagination,
  ToTop: ToTop,
  SearchPane: SearchPane,
  TimeTD: TimeTD,
  CurrencyTD: CurrencyTD,
  DateTimePicker: DateTimePicker,
  Dropzone: Dropzone,
  Select2: Select2,
  Spinner: Spinner,
  Tree: Tree,
  ErrorHandler: ErrorHandler
};
