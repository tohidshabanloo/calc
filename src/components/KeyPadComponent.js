import React from "react";

const KeyPadComponent = ({ onClick }) => {
  return (
    [
      { name: "(", value: "(", className: "action" },
      { name: "CE", value: "CE", className: "action" },
      { name: ")", value: ")", className: "action" },
      { name: "C", value: "C", className: "action" },
    ],
    [
      { name: "1", value: "1", className: "" },
      { name: "2", value: "2", className: "" },
      { name: "3", value: "3", className: "" },
      { name: "+", value: "C", className: "action" },
    ],
    [
      { name: "4", value: "4", className: "" },
      { name: "5", value: "5", className: "" },
      { name: "6", value: "6", className: "" },
      { name: "-", value: "-", className: "action" },
    ],
    [
      { name: "7", value: "7", className: "" },
      { name: "8", value: "8", className: "" },
      { name: "9", value: "9", className: "" },
      { name: "*", value: "x", className: "action" },
    ],
    [
      { name: ".", value: "7", className: "" },
      { name: "0", value: "8", className: "" },
      { name: "=", value: "9", className: "" },
      { name: "/", value: "/", className: "action" },
    ]
  );
};

export default KeyPadComponent;
