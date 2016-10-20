'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Property = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _viewmodelReact = require('viewmodel-react');

var _viewmodelReact2 = _interopRequireDefault(_viewmodelReact);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Property = exports.Property = function (_React$Component) {
  _inherits(Property, _React$Component);

  _createClass(Property, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          {
            style: _viewmodelReact2.default.getStyle(this, null, null, '', 'nameStyle'),
            ref: _viewmodelReact2.default.bindElement(this, null, null, 'text: name, style: nameStyle'),
            'data-bind': 'text: name, style: nameStyle'
          },
          _viewmodelReact2.default.getValue(this, null, null, 'name')
        ),
        _react2.default.createElement(
          'td',
          { style: {
              paddingLeft: '5px'
            } },
          _viewmodelReact2.default.getValue(this, null, null, 'isOther') ? _react2.default.createElement('textarea', { rows: '1', disabled: this.isVmProp(), style: {
              fontFamily: 'Arial',
              unknown: 'sans-serif',
              borderRadius: '4px'
            }, defaultValue: _viewmodelReact2.default.getValue(this, null, null, 'value'),
            ref: _viewmodelReact2.default.bindElement(this, null, null, '{value:value}'),
            'data-bind': '{value:value}'
          }) : null,
          _viewmodelReact2.default.getValue(this, null, null, 'type === \'boolean\'') ? _react2.default.createElement('input', { type: 'checkbox', defaultChecked: _viewmodelReact2.default.getValue(this, null, null, 'value'),
            ref: _viewmodelReact2.default.bindElement(this, null, null, '{check:value}'),
            'data-bind': '{check:value}'
          }) : null,
          _viewmodelReact2.default.getValue(this, null, null, 'isObject') ? _react2.default.createElement('textarea', { rows: '4', disabled: this.isVmProp(), style: {
              fontFamily: 'Arial',
              unknown: 'sans-serif',
              borderRadius: '4px'
            }, defaultValue: _viewmodelReact2.default.getValue(this, null, null, 'objectValue'),
            ref: _viewmodelReact2.default.bindElement(this, null, null, '{value:objectValue}'),
            'data-bind': '{value:objectValue}'
          }) : null,
          _viewmodelReact2.default.getValue(this, null, null, 'isArray') ? _react2.default.createElement('textarea', { disabled: 'disabled', style: {
              fontFamily: 'Arial',
              unknown: 'sans-serif',
              borderRadius: '4px'
            }, defaultValue: _viewmodelReact2.default.getValue(this, null, null, 'arrayValue'),
            ref: _viewmodelReact2.default.bindElement(this, null, null, '{value:arrayValue}'),
            'data-bind': '{value:arrayValue}'
          }) : null,
          _viewmodelReact2.default.getValue(this, null, null, 'isFunc && !isVmProp && !showFuncResult') ? _react2.default.createElement(
            'a',
            {
              style: {
                cursor: 'pointer'
              },
              ref: _viewmodelReact2.default.bindElement(this, null, null, '{click:showFuncResult(true)}'),
              'data-bind': '{click:showFuncResult(true)}'
            },
            'evaluate'
          ) : null,
          _viewmodelReact2.default.getValue(this, null, null, 'showFuncResult') ? _react2.default.createElement('textarea', { disabled: 'disabled', rows: '1', style: {
              fontFamily: 'Arial',
              unknown: 'sans-serif',
              borderRadius: '4px'
            }, defaultValue: _viewmodelReact2.default.getValue(this, null, null, 'value'),
            ref: _viewmodelReact2.default.bindElement(this, null, null, '{value:value}'),
            'data-bind': '{value:value}'
          }) : null
        )
      );
    }
  }]);

  function Property(props) {
    _classCallCheck(this, Property);

    var _this = _possibleConstructorReturn(this, (Property.__proto__ || Object.getPrototypeOf(Property)).call(this, props));

    _viewmodelReact2.default.prepareComponent('Property', _this, {
      name: '',

      value: undefined,
      isFunc: false,
      showFuncResult: false,
      objectValue: _viewmodelReact2.default.property.string.convertIn(function (value) {
        this.value(JSON.parse(value));
      }).convertOut(function (value) {
        return JSON.stringify(this.value(), null, 2);
      }),
      nameStyle: function nameStyle() {
        return {
          color: this.isFunc() || this.value.valid() ? undefined : 'darkred'
        };
      },
      type: function type() {
        return _typeof(this.value());
      },
      isBoolean: function isBoolean() {
        return !this.isFunc() && this.type() === 'boolean';
      },
      isObject: function isObject() {
        return !this.isFunc() && this.type() === 'object' && this.value() !== null && !(this.value() instanceof Array);
      },
      isArray: function isArray() {
        return !this.isFunc() && this.type() === 'object' && this.value() instanceof Array;
      },
      isOther: function isOther() {
        return !this.isFunc() && !(this.isBoolean() || this.isObject() || this.isArray());
      },
      arrayValue: function arrayValue() {
        return this.value().toString();
      },
      isVmProp: function isVmProp() {
        return _viewmodelReact2.default.properties[this.name()];
      }
    });

    return _this;
  }

  return Property;
}(_react2.default.Component);