webpackHotUpdate("main",{

/***/ "./src/components/SoloModal/SoloModal.component.jsx":
/*!**********************************************************!*\
  !*** ./src/components/SoloModal/SoloModal.component.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/index.js");
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Modal */ "./node_modules/@mui/material/Modal/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _Modal_Modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Modal/Modal.component */ "./src/components/Modal/Modal.component.jsx");
/* harmony import */ var _SoloModal_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SoloModal.styles */ "./src/components/SoloModal/SoloModal.styles.jsx");
var _jsxFileName = "/Users/henizola/Desktop/Fiverr/pewpog/src/components/SoloModal/SoloModal.component.jsx";






const style = {
  position: "absolute",
  top: "55%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "425px",
  outline: "none",
  padding: "39px 49px",
  background: "#FFFFFF 0% 0% no-repeat padding-box",
  boxShadow: " 0px 3px 10px #0000001F",
  borderRadius: "15px"
};

const SoloModal = _ref => {
  let {
    open,
    setOpen,
    onClose
  } = _ref;

  const handleOpen = () => {
    setOpen(true);
  };

  const [warning, setWarning] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const [name, setName] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const [game, setGame] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const [date, setDate] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const [loot, setLoot] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const [detail, setDetail] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const [tag, setTag] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");

  const handleSubmit = () => {
    if (name.length < 1 || game.length < 1 || date.length < 1 || loot.length < 1 || detail.length < 1 || tag.length < 1) {
      setWarning(true);
    } else {// onClose();
    }
  };

  const [info, setInfo] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const [tagInfo, setTagInfo] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material_Modal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    open: open,
    onClose: onClose,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_0__["default"], {
    sx: style,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Modal_Modal_component__WEBPACK_IMPORTED_MODULE_4__["default"], {
    open: open,
    handleOpen: handleOpen,
    handleClose: onClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SoloModal_styles__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
    className: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 8
    }
  }, "Create Solo Match"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SoloModal_styles__WEBPACK_IMPORTED_MODULE_5__["InputContainer"], {
    error: warning ? name.length < 1 ? "invalid" : "valid" : "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "input-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, "Match name "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    className: "input",
    onChange: e => setName(e.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SoloModal_styles__WEBPACK_IMPORTED_MODULE_5__["Warning"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, "This field is required")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SoloModal_styles__WEBPACK_IMPORTED_MODULE_5__["InputContainer"], {
    error: warning ? game.length < 1 ? "invalid" : "valid" : "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "input-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, "Game "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("select", {
    className: "input",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 10
    }
  }, "Valorant"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 10
    }
  }, "League of Lefends"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 10
    }
  }, "Team Fight Tactics"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 10
    }
  }, "Legends of Runeterra")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SoloModal_styles__WEBPACK_IMPORTED_MODULE_5__["Warning"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, "This field is required")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SoloModal_styles__WEBPACK_IMPORTED_MODULE_5__["InputContainer"], {
    error: warning ? date.length < 1 ? "invalid" : "valid" : "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "input-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, "Match date "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "date",
    className: "input",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SoloModal_styles__WEBPACK_IMPORTED_MODULE_5__["Warning"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, "This field is required")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SoloModal_styles__WEBPACK_IMPORTED_MODULE_5__["InputContainer"], {
    error: warning ? loot.length < 1 ? "invalid" : "valid" : "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "input-title info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, "Loot amount ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaInfoCircle"], {
    onClick: () => setInfo(!info),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 22
    }
  }), info && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 12
    }
  }, "Pool in money per team from P0 to P2000. Winnings split evenly."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    className: "input",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SoloModal_styles__WEBPACK_IMPORTED_MODULE_5__["Warning"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, "This field is required")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SoloModal_styles__WEBPACK_IMPORTED_MODULE_5__["InputContainer"], {
    error: warning ? detail.length < 1 ? "invalid" : "valid" : "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "input-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, "Match Details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("textarea", {
    name: "",
    className: "input",
    id: "",
    cols: "30",
    rows: "20",
    style: {
      minHeight: "70px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SoloModal_styles__WEBPACK_IMPORTED_MODULE_5__["InputContainer"], {
    error: warning ? tag.length < 1 ? "invalid" : "valid" : "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "input-title info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }, "Gamertag ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaInfoCircle"], {
    onClick: () => setTagInfo(!tagInfo),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 19
    }
  }), tagInfo && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 12
    }
  }, "Pool in Money per team from P0 to P2000. Winnings split evenly."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "text",
    className: "input",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SoloModal_styles__WEBPACK_IMPORTED_MODULE_5__["Warning"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }
  }, "This field is required")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SoloModal_styles__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    onClick: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 8
    }
  }, "Submit"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SoloModal);

/***/ })

})
//# sourceMappingURL=main.df139ecd9bd80fadd926.hot-update.js.map