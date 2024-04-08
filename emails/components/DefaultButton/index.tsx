import * as React from "react";
import {Button} from "@react-email/components";

const DefaultButton = ({link, label}) => {
  return (
    <Button
      href={link}
      style={button}
    >
          {label}
    </Button>
  );
};

export default DefaultButton;

const button = {
  backgroundColor: "white",
  fontSize: "16px",
  width: "100%",
  border: "1px solid #CBCBCB",
  color: "black",
  borderRadius: "8px",
  fontWeight: "700",
  padding: "12px 0",
  textAlign: "center" as const,
  display: "block",
}