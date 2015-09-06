var _ = require('underscore');
var EventEmitter = require('events').EventEmitter;
var shallowEqual = require('react/lib/shallowEqual');
var CHANGE_EVENT = 'change';

var StoreUtils = {
  createStore: function(spec) {
    var store = _.extend({
      emitChange: function() {
        this.emit(CHANGE_EVENT);
      },

      addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
      },

      removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
      }
    }, spec, EventEmitter.prototype);

    _.each(store, function(val, key) {
      if (_.isFunction(val)) {
        store[key] = store[key].bind(store);
      }
    });

    store.setMaxListeners(0);
    return store;
  },

  isInPackage: function(pack, id, fields) {
    var item = pack[id];
    if (!pack[id]) {
      return false;
    }

    if (fields) {
      return _.every(fields, function(field) {
        return item.hasOwnProperty(field);
      });
    } else {
      return true;
    }
  },

  mergePackage: function(pack, entities, transform) {
    if (!transform) {
      transform = function(x) {
        return x;
      }
    }

    for (var key in entities) {
      if (!entities.hasOwnProperty(key)) {
        continue;
      }

      if (!pack.hasOwnProperty(key)) {
        pack[key] = transform(entities[key]);
      } else if (!shallowEqual(pack[key], entities[key])) {
        pack[key] = transform(_.extend({}, pack[key], entities[key]));
      }
    }
  }
};

module.exports = StoreUtils;
