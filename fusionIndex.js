"use strict";
require('babel-polyfill');
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var dwWineImage = require('./dwWineImage');

var dwWineCulture = require('./dwWineCulture');

var Koa = require("koa");

var dwEntrepriseNews = require("./fusiondwe"); // const dwWineImage = require("dwWineImage");


var app = new Koa();
app.use( /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx) {
    var result1, result2, result3;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = true;
            _context.next = _context.t0 === (ctx.path === "/wineCulture") ? 3 : _context.t0 === (ctx.path === "/entrepriseNews") ? 10 : _context.t0 === (ctx.path === "/wineImage") ? 17 : 24;
            break;

          case 3:
            _context.next = 5;
            return dwWineCulture.dw();

          case 5:
            result1 = _context.sent;
            ctx.request.header = {
              'Access-Control-Allow-Origin': '*'
            }; // ctx.request.setHeader('Access-Control-Allow-Origin','*')

            ctx.response.header = {
              'Content-Type': 'text/json'
            };
            ctx.body = result1; // ctx.body = "/wineCulture"

            return _context.abrupt("break", 26);

          case 10:
            _context.next = 12;
            return dwEntrepriseNews.dw();

          case 12:
            result2 = _context.sent;
            ctx.request.header = {
              'Access-Control-Allow-Origin': '*'
            };
            ctx.response.header = {
              'Content-Type': 'text/json'
            };
            ctx.body = result2; // ctx.body = "/entrepriseNews";   

            return _context.abrupt("break", 26);

          case 17:
            _context.next = 19;
            return dwWineImage.dw();

          case 19:
            result3 = _context.sent;
            ctx.request.header = {
              'Access-Control-Allow-Origin': '*'
            };
            ctx.response.header = {
              'Content-Type': 'text/json'
            };
            ctx.body = result3; // console.log(result)

            return _context.abrupt("break", 26);

          case 24:
            ctx.status = 404;
            return _context.abrupt("break", 26);

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
app.listen(3000);
