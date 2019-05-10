"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var fontawesome_free_solid_1 = require("@fortawesome/fontawesome-free-solid");
var prosemirror_commands_1 = require("prosemirror-commands");
var MediaComponent = /** @class */ (function (_super) {
    __extends(MediaComponent, _super);
    function MediaComponent(props) {
        return _super.call(this, props) || this;
    }
    MediaComponent.prototype.onClick = function (e) {
        console.log(e);
    };
    MediaComponent.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("button", { onClick: this.onClick.bind(this) }, "click!")));
    };
    return MediaComponent;
}(React.Component));
var Media = /** @class */ (function () {
    function Media() {
    }
    Object.defineProperty(Media.prototype, "name", {
        get: function () {
            return 'media';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Media.prototype, "showMenu", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Media.prototype, "schema", {
        get: function () {
            return {
                content: 'inline*',
                group: 'block',
                parseDOM: [{ tag: "media" }],
                toDOM: function () { return ["media", 0]; }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Media.prototype, "icon", {
        get: function () {
            return React.createElement(react_fontawesome_1.default, { icon: fontawesome_free_solid_1.faImage });
        },
        enumerable: true,
        configurable: true
    });
    Media.prototype.onClick = function (state, dispatch) {
        prosemirror_commands_1.setBlockType(state.schema.nodes.media)(state, dispatch);
    };
    Media.prototype.render = function (node) {
        return React.createElement(MediaComponent, null);
    };
    return Media;
}());
exports.default = Media;
//# sourceMappingURL=media.js.map