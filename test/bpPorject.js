'use strict'

var path = require('path')
var rmdir = require('rmdir')
var fs = require('fs')
var async = require('async')
var bp = require(path.join(__dirname, '..', 'src', 'bp.js'))

exports.bpTest = {
  setUp: function (cb) {
    var self = this

    // Set Configuration to BP
    this.config = {
      dir: path.join(__dirname, 'dirTest'),
      homedir: path.join(__dirname, 'dirTest'),
    }

    // create a BP element
    this.bp = new bp(self.config)

    cb()
  },
  't': function (assert) {
    var bp = this.bp

    bp.install('com', 'opts', 'cb')
    bp.install('com', 'cb')
    bp.install('com')

    assert.ok(true)
    assert.done()
  },
}
