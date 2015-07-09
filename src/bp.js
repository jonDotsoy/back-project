'use strict'


var path = require('path')
var init = require(path.join(__dirname, 'init.js'))
var list = require(path.join(__dirname, 'list.js'))
var start = require(path.join(__dirname, 'start.js'))
var install = require(path.join(__dirname, 'install.js'))
var editor = require(path.join(__dirname, 'editor.js'))
var backproject = require(path.join(__dirname, 'backproject.js'))


var bp = backproject
bp.prototype.init = init
bp.prototype.list = list
bp.prototype.start = start
bp.prototype.install = install
bp.prototype.editor = editor


module.exports = bp
