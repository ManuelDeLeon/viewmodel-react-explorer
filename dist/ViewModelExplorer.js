'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewModelExplorer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DisplayComponent = require('./DisplayComponent/DisplayComponent');

var _viewmodelReact = require('viewmodel-react');

var _viewmodelReact2 = _interopRequireDefault(_viewmodelReact);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_viewmodelReact2.default.signal({
  window: {
    windowSize: {
      target: window,
      event: 'resize',
      transform: function transform(event) {
        return {
          height: window.innerHeight,
          width: window.innerWidth
        };
      }
    }
  }
});

var scrollWidth = void 0;

var ViewModelExplorer = exports.ViewModelExplorer = function (_React$Component) {
  _inherits(ViewModelExplorer, _React$Component);

  _createClass(ViewModelExplorer, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        {
          style: {
            fontFamily: 'Arial',
            unknown: 'sans-serif',
            fontSize: '12px',
            lineHeight: '16px'
          }
        },
        _react2.default.createElement(
          'div',
          {
            style: _viewmodelReact2.default.getStyle(this, null, null, '', 'panelStyle'),
            ref: _viewmodelReact2.default.bindElement(this, null, null, 'style: panelStyle, hover: hoveringIcon'),
            'data-bind': 'style: panelStyle, hover: hoveringIcon'
          },
          _react2.default.createElement(
            'div',
            { style: {
                textAlign: 'left'
              } },
            _react2.default.createElement('img', { src: 'https://viewmodel.org/paper-plane.png',
              style: {
                maxHeight: '15px',
                marginTop: '2px',
                marginLeft: '2px',
                cursor: 'pointer'
              },
              ref: _viewmodelReact2.default.bindElement(this, null, null, 'toggle: show'),
              'data-bind': 'toggle: show'
            }),
            _react2.default.createElement(
              'span',
              { style: {
                  fontSize: '14px',
                  marginLeft: '10px',
                  fontWeight: 'bold'
                } },
              'View Models'
            )
          ),
          this.components().map(function (c) {
            return _react2.default.createElement(_DisplayComponent.DisplayComponent, {
              'data-vm-parent': _this2,
              key: c.vmId, viewmodel: c });
          })
        )
      );
    }
  }]);

  function ViewModelExplorer(props) {
    _classCallCheck(this, ViewModelExplorer);

    var _this = _possibleConstructorReturn(this, (ViewModelExplorer.__proto__ || Object.getPrototypeOf(ViewModelExplorer)).call(this, props));

    _viewmodelReact2.default.prepareComponent('ViewModelExplorer', _this, {
      signal: 'window',
      topMargin: 45,
      bottomMargin: 45,
      show: false,

      panelWidth: 330,

      hoveringIcon: false,
      panelHeight: function panelHeight() {
        return this.windowSize().height - this.topMargin() - this.bottomMargin();
      },
      collapsedLeft: function collapsedLeft() {
        return this.hoveringIcon() ? 40 : 35;
      },
      panelStyle: function panelStyle() {
        return {
          position: 'fixed',
          height: this.show() ? this.panelHeight() : 25,
          width: this.panelWidth(),
          'top': this.topMargin(),
          'z-index': 99999,
          'background-color': '#ccc',
          border: '1px solid #555',
          'left': this.windowSize().width - (this.show() ? this.panelWidth() : this.collapsedLeft()) - this.scrollbarWidth(),
          'overflow-x': 'auto',
          'overflow-y': 'visible',
          'border-radius': '1em 0 0 1em',
          'WebkitTransition': 'all 0.5s ease-in-out',
          'MozTransition': 'all 0.5s ease-in-out',
          '-ms-transition': 'all 0.5s ease-in-out',
          'OTransition': 'all 0.5s ease-in-out',
          opacity: this.show() || this.hoveringIcon() ? 1 : 0.4
        };
      },
      scrollbarWidth: function scrollbarWidth() {
        var body = document.body,
            html = document.documentElement;
        var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        if (height <= window.innerHeight) return 0;
        if (scrollWidth) return scrollWidth;

        var outer = document.createElement("div");
        outer.style.visibility = "hidden";
        outer.style.width = "100px";
        outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

        document.body.appendChild(outer);

        var widthNoScroll = outer.offsetWidth;
        // force scrollbars
        outer.style.overflow = "scroll";

        // add innerdiv
        var inner = document.createElement("div");
        inner.style.width = "100%";
        outer.appendChild(inner);

        var widthWithScroll = inner.offsetWidth;

        // remove divs
        outer.parentNode.removeChild(outer);

        scrollWidth = widthNoScroll - widthWithScroll;
        return scrollWidth;
      },
      components: function components() {
        if (!_viewmodelReact2.default.rootComponents) {
          _viewmodelReact2.default.prepareRoot();
        }
        return _viewmodelReact2.default.rootComponents.list();
      }
    });

    return _this;
  }

  return ViewModelExplorer;
}(_react2.default.Component);