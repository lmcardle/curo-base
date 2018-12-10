const express = require("express");

module.exports = function static(options) {
  return [
    express.static('dist')
  ]
}