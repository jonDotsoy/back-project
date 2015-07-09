'use strict'


// var cp = require('child_process')
var path = require('path')
var cp = require(path.join(__dirname, 'cp.js'))
var async = require('async')
var util = require('util')



/**
* start([[options,]callback])
*
* options:
*   cwd:    process.cwd()
*   env:    process.env
*   daemon: false
*/
var start = function (options, callback) {
  var self = this

  if (!callback && typeof options == 'function') {
    callback = options
    options = {}
  }

  options = options || {}
  callback = callback || function () {}

  options.env = options.env || process.env
  options.cwd = options.cwd || self.dir || process.cwd()
  options.daemon = options.daemon || false

  self.options.val('start', function (err, scripts) {
    async.forEachOfSeries(scripts, function (script, key, cb) {
      util.log('[' + key + '/' + (scripts.length - 1) + ']' + ':' , script)
      var childScript = cp(script, options, cb)
    },callback)
  })
  callback()
}



module.exports = start
