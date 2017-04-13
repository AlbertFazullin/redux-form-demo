/* global __DEV__:true */
module.exports = __DEV__ ? require('./configureStore.client.dev') : require('./configureStore.client.prod');
