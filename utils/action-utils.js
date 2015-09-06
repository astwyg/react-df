
var OADispatcher = require('../dispatchers/oa-dispatcher');
var ActionType = require('../constants/action-types');

module.exports = {
  dispatchError: function(error) {
    OADispatcher.handleServerAction({
      type: ActionType.GLOBAL_ERROR,
      error: error
    });
  }
};
