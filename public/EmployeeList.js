"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _EmployeeFilter = _interopRequireDefault(require("./EmployeeFilter.jsx"));
var _EmployeeAdd = _interopRequireDefault(require("./EmployeeAdd.jsx"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function EmployeeRow(props) {
  function onDeleteClick() {
    props.deleteEmployee(props.employee._id);
  }
  return /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, props.employee.name), /*#__PURE__*/_react["default"].createElement("td", null, props.employee.extension), /*#__PURE__*/_react["default"].createElement("td", null, props.employee.email), /*#__PURE__*/_react["default"].createElement("td", null, props.employee.title), /*#__PURE__*/_react["default"].createElement("td", null, props.employee.dateHired.toDateString()), /*#__PURE__*/_react["default"].createElement("td", null, props.employee.currentlyEmployed ? 'Yes' : 'No'), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onDeleteClick
  }, "DELETE")));
}
function EmployeeTable(props) {
  var employeeRows = props.employees.map(function (employee) {
    return /*#__PURE__*/_react["default"].createElement(EmployeeRow, {
      key: employee._id,
      employee: employee,
      deleteEmployee: props.deleteEmployee
    });
  });
  return /*#__PURE__*/_react["default"].createElement("table", {
    className: "bordered-table"
  }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, "Name"), /*#__PURE__*/_react["default"].createElement("th", null, "Extension"), /*#__PURE__*/_react["default"].createElement("th", null, "Email"), /*#__PURE__*/_react["default"].createElement("th", null, "Title"), /*#__PURE__*/_react["default"].createElement("th", null, "Date Hired"), /*#__PURE__*/_react["default"].createElement("th", null, "Currently Employed?"), /*#__PURE__*/_react["default"].createElement("th", null))), /*#__PURE__*/_react["default"].createElement("tbody", null, employeeRows));
}
var EmployeeList = exports["default"] = /*#__PURE__*/function (_React$Component) {
  function EmployeeList() {
    var _this;
    _classCallCheck(this, EmployeeList);
    _this = _callSuper(this, EmployeeList);
    _this.state = {
      employees: []
    };
    _this.createEmployee = _this.createEmployee.bind(_this);
    _this.deleteEmployee = _this.deleteEmployee.bind(_this);
    return _this;
  }
  _inherits(EmployeeList, _React$Component);
  return _createClass(EmployeeList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var _this2 = this;
      fetch('/api/employees').then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log('Total count of employees:', data.count);
        data.employees.forEach(function (employee) {
          employee.dateHired = new Date(employee.dateHired);
        });
        _this2.setState({
          employees: data.employees
        });
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }, {
    key: "createEmployee",
    value: function createEmployee(employee) {
      var _this3 = this;
      fetch('/api/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(employee)
      }).then(function (response) {
        return response.json();
      }).then(function (newEmployee) {
        newEmployee.employee.dateHired = new Date(newEmployee.employee.dateHired);
        var newEmployees = _this3.state.employees.concat(newEmployee.employee);
        _this3.setState({
          employees: newEmployees
        });
        console.log('Total counts of employees:', newEmployees.length);
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }, {
    key: "deleteEmployee",
    value: function deleteEmployee(id) {
      var _this4 = this;
      fetch("/api/employees/".concat(id), {
        method: 'DELETE'
      }).then(function (response) {
        if (!response.ok) {
          console.log('Failed to delete employee.');
        } else {
          _this4.loadData();
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("h1", null, "Employee Management Application"), /*#__PURE__*/_react["default"].createElement(_EmployeeFilter["default"], null), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement(EmployeeTable, {
        employees: this.state.employees,
        deleteEmployee: this.deleteEmployee
      }), /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement(_EmployeeAdd["default"], {
        createEmployee: this.createEmployee
      }));
    }
  }]);
}(_react["default"].Component);