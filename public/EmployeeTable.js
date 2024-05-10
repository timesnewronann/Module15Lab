"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _EmployeeRow = _interopRequireDefault(require("./EmployeeRow.jsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function EmployeeTable(props) {
  var employeeRows = props.employees.map(function (employee) {
    return /*#__PURE__*/_react["default"].createElement(_EmployeeRow["default"], {
      key: employee._id,
      employee: employee,
      deleteEmployee: props.deleteEmployee
    });
  });
  return /*#__PURE__*/_react["default"].createElement("table", {
    className: "bordered-table"
  }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, "Name"), /*#__PURE__*/_react["default"].createElement("th", null, "Extension"), /*#__PURE__*/_react["default"].createElement("th", null, "Email"), /*#__PURE__*/_react["default"].createElement("th", null, "Title"), /*#__PURE__*/_react["default"].createElement("th", null, "Date Hired"), /*#__PURE__*/_react["default"].createElement("th", null, "Currently Employed?"), /*#__PURE__*/_react["default"].createElement("th", null))), /*#__PURE__*/_react["default"].createElement("tbody", null, employeeRows));
}
var _default = exports["default"] = EmployeeTable;