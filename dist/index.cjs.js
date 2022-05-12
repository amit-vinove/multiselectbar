'use strict';

var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');
var _taggedTemplateLiteral = require('@babel/runtime/helpers/taggedTemplateLiteral');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var React = require('react');
var reactBootstrapIcons = require('react-bootstrap-icons');
var styled = require('styled-components');
var reactBootstrap = require('react-bootstrap');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var _toConsumableArray__default = /*#__PURE__*/_interopDefaultLegacy(_toConsumableArray);
var _taggedTemplateLiteral__default = /*#__PURE__*/_interopDefaultLegacy(_taggedTemplateLiteral);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css = "\r\n[contentEditable=true]:empty:before {\r\n    content:attr(data-text);\r\n    color:gray\r\n  }\r\n.caret{\r\n    float: right;\r\n    color: dimgray;\r\n}\r\n.caret:hover{\r\n    color: black;\r\n}\r\n.xCircle{\r\n    float: right;\r\n    margin-top: 3px;\r\n    color: dimgray;\r\n}\r\n.xCircle:hover{\r\n    color: black;\r\n}";
n(css,{});

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function MultiSelectbar(_ref) {
  var colors = _ref.colors,
      options = _ref.options,
      borderColor = _ref.borderColor,
      tagColor = _ref.tagColor,
      tagTextColor = _ref.tagTextColor,
      tagHoverColor = _ref.tagHoverColor,
      tagHoverTextColor = _ref.tagHoverTextColor,
      tagTextSize = _ref.tagTextSize,
      tagCrossSize = _ref.tagCrossSize,
      placeholder = _ref.placeholder,
      placeholderSize = _ref.placeholderSize,
      listTextSize = _ref.listTextSize,
      listHoverColor = _ref.listHoverColor,
      dropdownHeight = _ref.dropdownHeight,
      dropdownMarginTop = _ref.dropdownMarginTop,
      inputCrossSize = _ref.inputCrossSize,
      inputDropSize = _ref.inputDropSize;
  var tempOptDB = [{
    name: "Option 1",
    isSelected: false
  }, {
    name: "Option 2",
    isSelected: false
  }, {
    name: "Option 3",
    isSelected: false
  }, {
    name: "Option 4",
    isSelected: false
  }, {
    name: "Option 5",
    isSelected: false
  }, {
    name: "Option 6",
    isSelected: false
  }];
  var tempColorDB = ["black", "#d9004c", "#013220", "#ffc40c", "#008b8b"];
  var optionsDB = options ? options : tempOptDB;
  var colorsDB = colors ? colors : tempColorDB;

  var _useState = React.useState(optionsDB),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      dropdown = _useState2[0],
      setDropdown = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray__default["default"](_useState3, 2),
      dropdownVisible = _useState4[0],
      setDropdownVisible = _useState4[1];

  var _useState5 = React.useState([]),
      _useState6 = _slicedToArray__default["default"](_useState5, 2),
      text = _useState6[0],
      setText = _useState6[1];

  var _useState7 = React.useState(optionsDB),
      _useState8 = _slicedToArray__default["default"](_useState7, 2),
      option = _useState8[0],
      setOptions = _useState8[1];

  var TagStyle = styled__default["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral__default["default"](["\n    background-color: ", ";\n    padding: 5px;\n    margin-left: 5px;\n    margin-right: 5px;\n    border-radius: 5px;\n    font-size: 20px;\n    font-weight: 500;\n    color: ", ";\n    &:hover {\n      background-color: ", ";\n      color: ", ";\n    }\n  "])), tagColor ? tagColor : "#dbd8d8", tagTextColor ? tagTextColor : "black", tagHoverColor ? tagHoverColor : "#3ba2ff", tagHoverTextColor ? tagHoverTextColor : "white");
  var TagText = styled__default["default"].h5(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral__default["default"](["\n    font-size: ", ";\n  "])), tagTextSize ? tagTextSize : "20px");
  var ListText = styled__default["default"].h5(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral__default["default"](["\n  font-size: ", "\n  margin-top: 5px;\n  margin-left: 10px;\n  line-height: 1.6;\n  "])), listTextSize ? listTextSize : "21px");
  var ListIcons = styled__default["default"].h5(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral__default["default"](["\n  font-size: ", "\n  float: right;\n  text-align: center;\n  border-radius: 50%;\n  width: fit-content;\n  padding: 8px;\n  color: white !important;\n  line-height: 1.2;\n  margin-top: 5px;\n  "])), listTextSize ? listTextSize : "21px");
  var SelectList = styled__default["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral__default["default"](["\n    display: flex !important;\n    padding: 3px;\n    &:hover {\n      background-color: ", ";\n      cursor: pointer;\n      color: white !important;\n      border-radius: 4px;\n    }\n  "])), listHoverColor ? listHoverColor : "#147fdc");

  var initials = function initials(username) {
    return username.match(/(\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase();
  };

  var Select = function Select(e, name) {
    setText([].concat(_toConsumableArray__default["default"](text), [name]));
    setOptions(option.map(function (data) {
      return data.name === name ? _objectSpread(_objectSpread({}, data), {}, {
        isSelected: true
      }) : data;
    }));
    setDropdown(dropdown.map(function (ele) {
      return ele.name === name ? _objectSpread(_objectSpread({}, ele), {}, {
        isSelected: true
      }) : ele;
    }));
  };

  var searchOptions = function searchOptions(e) {
    var result = _toConsumableArray__default["default"](option).filter(function (ele) {
      return ele.name.toLowerCase().includes(e.toLowerCase()) && ele.isSelected === false;
    });

    setDropdown(result);
  };

  var remove = function remove(e, name) {
    var temp = text.filter(function (data, i) {
      return data !== name;
    });
    setText(temp);
    setOptions(option.map(function (data) {
      return data.name === name ? _objectSpread(_objectSpread({}, data), {}, {
        isSelected: false
      }) : data;
    }));
    setDropdown(dropdown.map(function (ele) {
      return ele.name === name ? _objectSpread(_objectSpread({}, ele), {}, {
        isSelected: false
      }) : ele;
    }));
  };

  var ClearSelected = function ClearSelected(e) {
    setText([]);
    setDropdown(optionsDB);
    setOptions(optionsDB);
  };

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(reactBootstrap.Card, {
    style: {
      border: "1px solid",
      borderColor: "".concat(borderColor ? borderColor : "#0d46b7")
    },
    onClick: function onClick(e) {
      return !dropdownVisible ? setDropdownVisible(true) : setDropdownVisible(false);
    }
  }, /*#__PURE__*/React__default["default"].createElement(reactBootstrap.Card.Body, {
    style: {
      padding: "10px"
    }
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "col-md-11"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      display: "flex"
    }
  }, text.map(function (data) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      key: Math.random()
    }, data && /*#__PURE__*/React__default["default"].createElement(TagStyle, null, /*#__PURE__*/React__default["default"].createElement(TagText, null, data, /*#__PURE__*/React__default["default"].createElement(reactBootstrapIcons.XCircleFill, {
      type: "button",
      onClick: function onClick(e) {
        return remove(e, data);
      },
      style: {
        marginLeft: "10px",
        fontSize: "".concat(tagCrossSize ? tagCrossSize : "18px")
      }
    }))));
  }), /*#__PURE__*/React__default["default"].createElement("h6", {
    contenteditable: "true",
    style: {
      outline: "0px",
      marginTop: "8px",
      fontSize: "".concat(placeholderSize ? placeholderSize : "18px")
    },
    "data-text": placeholder ? placeholder : "Search here...",
    onInput: function onInput(e) {
      searchOptions(e.currentTarget.textContent);
    }
  }))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "col-md-1",
    style: {
      marginTop: "8px"
    }
  }, /*#__PURE__*/React__default["default"].createElement(reactBootstrapIcons.CaretDownFill, {
    type: "button",
    style: {
      fontSize: "".concat(inputDropSize ? inputDropSize : "23px")
    },
    className: "caret",
    onClick: function onClick(e) {
      return !dropdownVisible ? setDropdownVisible(true) : setDropdownVisible(false);
    }
  }), /*#__PURE__*/React__default["default"].createElement("span", {
    style: {
      float: "right",
      marginLeft: "7px",
      marginRight: "4px"
    }
  }, "|"), /*#__PURE__*/React__default["default"].createElement(reactBootstrapIcons.XCircleFill, {
    type: "button",
    style: {
      fontSize: "".concat(inputCrossSize ? inputCrossSize : "18px")
    },
    className: "xCircle",
    onClick: function onClick(e) {
      return ClearSelected();
    }
  })))))), dropdownVisible && /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement(reactBootstrap.Card, {
    style: {
      width: "100%",
      marginTop: "".concat(dropdownMarginTop ? dropdownMarginTop : "1px"),
      maxHeight: "".concat(dropdownHeight ? dropdownHeight : "280px"),
      overflowY: "auto"
    }
  }, /*#__PURE__*/React__default["default"].createElement(reactBootstrap.Card.Body, {
    style: {
      padding: "8px"
    }
  }, dropdown.map(function (data, i) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      key: Math.random()
    }, !data.isSelected && /*#__PURE__*/React__default["default"].createElement("div", {
      className: "col-md-12 ",
      onClick: function onClick(e) {
        return Select(e, data.name);
      }
    }, /*#__PURE__*/React__default["default"].createElement(SelectList, null, /*#__PURE__*/React__default["default"].createElement(ListIcons, {
      style: {
        background: "".concat(colorsDB[i % 5])
      }
    }, initials(data.name)), /*#__PURE__*/React__default["default"].createElement(ListText, {
      style: {
        marginTop: '5px'
      }
    }, data.name)), /*#__PURE__*/React__default["default"].createElement("hr", {
      style: {
        marginTop: "1px",
        marginBottom: "5px"
      }
    })));
  })))));
}

module.exports = MultiSelectbar;
