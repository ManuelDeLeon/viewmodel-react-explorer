'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DisplayComponent = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Property = require('./Property/Property');

var _viewmodelReact = require('viewmodel-react');

var _viewmodelReact2 = _interopRequireDefault(_viewmodelReact);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DisplayComponent = exports.DisplayComponent = function (_React$Component) {
  _inherits(DisplayComponent, _React$Component);

  _createClass(DisplayComponent, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'ul',
        { style: {
            listStyleType: 'none',
            paddingLeft: '10px',
            textAlign: 'left'
          } },
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'span',
            {
              style: _viewmodelReact2.default.getStyle(this, null, null, '', 'headStyle'),
              ref: _viewmodelReact2.default.bindElement(this, null, null, 'text: name, toggle: showChildren, style: headStyle'),
              'data-bind': 'text: name, toggle: showChildren, style: headStyle'
            },
            _viewmodelReact2.default.getValue(this, null, null, 'name')
          ),
          _viewmodelReact2.default.getValue(this, null, null, 'showChildren') ? _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'table',
              null,
              _react2.default.createElement(
                'tbody',
                null,
                _viewmodelReact2.default.getValue(this, null, null, 'properties').map(function (repeatObject, repeatIndex) {
                  return _react2.default.createElement(_Property.Property, _extends(_defineProperty({
                    'data-vm-parent': _this2
                  }, 'data-vm-parent', _this2), repeatObject, {
                    key: repeatObject.name,
                    'data-bind': 'repeat: properties, key: name'
                  }));
                })
              )
            ),
            _viewmodelReact2.default.getValue(this, null, null, 'children').map(function (repeatObject, repeatIndex) {
              return _react2.default.createElement(DisplayComponent, _extends(_defineProperty({
                'data-vm-parent': _this2
              }, 'data-vm-parent', _this2), repeatObject, {
                key: repeatObject.vmId,
                'data-bind': 'repeat: children, key: vmId'
              }));
            })
          ) : null
        )
      );
    }
  }]);

  function DisplayComponent(props) {
    _classCallCheck(this, DisplayComponent);

    var _this = _possibleConstructorReturn(this, (DisplayComponent.__proto__ || Object.getPrototypeOf(DisplayComponent)).call(this, props));

    _viewmodelReact2.default.prepareComponent('DisplayComponent', _this, {
      viewmodel: null,
      showChildren: false,
      name: function name() {
        var vm = this.viewmodel();
        return vm ? vm.vmComponentName : '';
      },
      properties: function properties() {
        var arr = [];
        var vm = this.viewmodel();
        for (var prop in vm) {
          if (vm[prop] && (vm[prop].vmPropId || vm[prop].vmIsFunc) && prop !== 'data-vm-parent' && prop !== 'data-bind') {
            arr.push({
              name: prop,
              value: vm[prop],
              isFunc: vm[prop].vmIsFunc
            });
          }
        }
        return arr;
      },
      children: function children() {
        var vm = this.viewmodel();
        if (vm) {
          var ret = [];
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = vm.children()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var v = _step.value;

              if (v.vmComponentName !== 'ViewModelExplorer') {
                ret.push({ viewmodel: v, vmId: v.vmId });
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          return ret;
        } else {
          return [];
        }
      },
      headStyle: function headStyle() {
        var hasChildren = this.children().length > 0 || this.properties().length > 0;
        return {
          color: this.viewmodel() && this.viewmodel().valid() ? 'darkblue' : 'darkred',
          'font-weight': hasChildren ? 'bold' : 'normal',
          cursor: hasChildren ? 'pointer' : 'default',
          'font-size': '12px'
        };
      }
    });

    return _this;
  }

  return DisplayComponent;
}(_react2.default.Component);