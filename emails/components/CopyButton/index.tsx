import * as React from "react";
import {Column, Row, Section} from "@react-email/components";

const CopyButton = ({text}) => {
  return (
    <Section style={button} align="center">
      <Row>
        <Column align="center" style={{padding: "12px 0"}}>
          {text}
        </Column>
      </Row>
    </Section>
  );
};

export default CopyButton;

const button = {
  backgroundColor: "white",
  fontSize: "16px",
  width: "100%",
  border: "1px solid #CBCBCB",
  color: "black",
  borderRadius: "8px",
  fontWeight: "700",
  // padding: "12px 0",
}