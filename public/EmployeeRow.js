"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function EmployeeRow(props) {
  function onDeleteClick() {
    props.deleteEmployee(props.employee._id);
  }
  return /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, props.employee.name), /*#__PURE__*/_react["default"].createElement("td", null, props.employee.extension), /*#__PURE__*/_react["default"].createElement("td", null, props.employee.email), /*#__PURE__*/_react["default"].createElement("td", null, props.employee.title), /*#__PURE__*/_react["default"].createElement("td", null, props.employee.dateHired.toDateString()), /*#__PURE__*/_react["default"].createElement("td", null, props.employee.currentlyEmployed ? 'Yes' : 'No'), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onDeleteClick
  }, "DELETE")));
}
var _default = exports["default"] = EmployeeRow;