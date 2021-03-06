"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_dom_1 = require("react-dom");
var smartblock_1 = require("../components/smartblock");
var extensions_1 = require("../extensions/");
exports.default = (function (item, option) {
    var dom = typeof item === 'string' ? document.querySelector(item) : item;
    if (!option.extensions) {
        option.extensions = extensions_1.default;
    }
    react_dom_1.render(React.createElement(React.Fragment, null,
        React.createElement(smartblock_1.default, __assign({}, option))), dom);
});
//# sourceMappingURL=index.js.map