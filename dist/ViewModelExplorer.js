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

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//var store = new Store('ViewModelExplorer');

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
            _react2.default.createElement('img', { src: 'https://viewmodel.blob.core.windows.net/explorer/viewmodel-logo-small.png',
              style: {
                maxHeight: '15px',
                marginTop: '3px',
                marginLeft: '2px',
                cursor: 'pointer',
                verticalAlign: 'top'
              },
              ref: _viewmodelReact2.default.bindElement(this, null, null, 'toggle: show'),
              'data-bind': 'toggle: show'
            }),
            _react2.default.createElement(
              'span',
              { style: {
                  fontSize: '14px',
                  marginLeft: '10px',
                  fontWeight: 'bold',
                  position: 'relative',
                  top: ' -4px'
                } },
              'View Models'
            ),
            _react2.default.createElement('img', { src: 'https://viewmodel.blob.core.windows.net/explorer/add.png',
              style: {
                marginLeft: '10px',
                cursor: 'pointer',
                marginTop: '5px'
              },
              title: 'Save current state',
              ref: _viewmodelReact2.default.bindElement(this, null, null, 'click: saveState'),
              'data-bind': 'click: saveState'
            }),
            _react2.default.createElement(
              'select',
              {
                defaultValue: _viewmodelReact2.default.getValue(this, null, null, 'selectedState'),
                style: _viewmodelReact2.default.getStyle(this, null, null, 'WebkitAppearance:button;WebkitPaddingEnd:20px;WebkitPaddingStart:2px;WebkitUserSelect:none;borderRadius:4px;boxShadow:0px 1px 3px rgba(0, 0, 0, 0.1);backgroundPosition:right;backgroundRepeat:no-repeat;border:1px solid #AAA;color:#555;fontSize:12px;overflow:hidden;padding:2px 5px;textOverflow:ellipsis;whiteSpace:nowrap;marginLeft:10px;marginTop:4px;verticalAlign:top;:;', 'selectedStateStyle'),
                ref: _viewmodelReact2.default.bindElement(this, null, null, 'value: selectedState, style: selectedStateStyle, change: loadState'),
                'data-bind': 'value: selectedState, style: selectedStateStyle, change: loadState'
              },
              _viewmodelReact2.default.getValue(this, null, null, 'savedStates').map(function (repeatObject, repeatIndex) {
                return _react2.default.createElement(
                  'option',
                  { value: repeatObject.name, key: repeatObject.name,
                    ref: _viewmodelReact2.default.bindElement(_this2, repeatObject, repeatIndex, 'repeat: savedStates, key: name'),
                    'data-bind': 'repeat: savedStates, key: name'
                  },
                  repeatObject.name
                );
              })
            ),
            _react2.default.createElement('img', { src: 'https://viewmodel.blob.core.windows.net/explorer/remove.png',
              style: {
                marginLeft: '10px',
                cursor: 'pointer',
                marginTop: '5px'
              },
              title: 'Delete selected state',
              ref: _viewmodelReact2.default.bindElement(this, null, null, 'click: deleteState'),
              'data-bind': 'click: deleteState'
            })
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

      selectedState: null,
      savedStates: [],
      created: function created() {
        var _this3 = this;

        _store2.default.forEach(function (key, val) {
          _this3.savedStates().push({ name: key, components: val });
        });
      },
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
      },
      addComponentForSave: function addComponentForSave(allComponents, component) {
        if (component.vmComponentName === "ViewModelExplorer") return;
        var data = component.data();
        if (Object.keys(data).length > 0) {
          allComponents[_viewmodelReact2.default.getComponentPath(component)] = data;
        }
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = component.children()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var child = _step.value;

            this.addComponentForSave(allComponents, child);
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
      },
      saveState: function saveState() {
        var name = prompt("Name of the current state:");
        var allComponents = {};
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this.components()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var component = _step2.value;

            this.addComponentForSave(allComponents, component);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        this.savedStates().push({ name: name, components: allComponents });
        _store2.default.set(name, allComponents);
        this.selectedState(name);
      },
      loadComponentState: function loadComponentState(components, component) {
        var _this4 = this;

        if (component.vmComponentName === "ViewModelExplorer") return;

        _viewmodelReact2.default.Tracker.afterFlush(function () {
          var data = components[_viewmodelReact2.default.getComponentPath(component)];
          if (data) {
            component.load(data);
          }

          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = component.children()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var child = _step3.value;

              _this4.loadComponentState(components, child);
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }
        });
      },
      loadState: function loadState() {
        var selectedState = this.selectedState();
        if (!selectedState) return;
        var that = this;
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          var _loop = function _loop() {
            var state = _step4.value;

            if (state.name === selectedState) {
              _viewmodelReact2.default.Tracker.nonreactive(function () {
                var _iteratorNormalCompletion5 = true;
                var _didIteratorError5 = false;
                var _iteratorError5 = undefined;

                try {
                  for (var _iterator5 = that.components()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var component = _step5.value;

                    that.loadComponentState(state.components, component);
                  }
                } catch (err) {
                  _didIteratorError5 = true;
                  _iteratorError5 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                      _iterator5.return();
                    }
                  } finally {
                    if (_didIteratorError5) {
                      throw _iteratorError5;
                    }
                  }
                }
              });

              return 'break';
            }
          };

          for (var _iterator4 = this.savedStates()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var _ret = _loop();

            if (_ret === 'break') break;
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }
      },
      deleteState: function deleteState() {
        var selectedState = this.selectedState();
        if (!selectedState) return;
        var response = confirm('Do you want to delete state \'' + selectedState + '\'');
        if (!response) return;
        _store2.default.remove(selectedState);
        var index = -1;
        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
          for (var _iterator6 = this.savedStates()[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
            var _state = _step6.value;

            index++;
            if (_state.name === selectedState) {
              this.savedStates().splice(index, 1);
              break;
            }
          }
        } catch (err) {
          _didIteratorError6 = true;
          _iteratorError6 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion6 && _iterator6.return) {
              _iterator6.return();
            }
          } finally {
            if (_didIteratorError6) {
              throw _iteratorError6;
            }
          }
        }

        this.selectedState(null);
      },
      selectedStateStyle: function selectedStateStyle() {
        return {
          width: 130 - this.scrollbarWidth(),
          backgroundImage: 'url(https://viewmodel.blob.core.windows.net/explorer/dropdown_arrow.png)'
        };
      }
    });

    return _this;
  }

  return ViewModelExplorer;
}(_react2.default.Component);