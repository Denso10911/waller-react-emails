import {Img, Section} from "@react-email/components";
import * as React from "react";

const baseUrl = "https://papelmailsignature.blob.core.windows.net/papelmailsignature"

const Header = () => {
  return (
    <Section style={header}>
      <Img
        src={`${baseUrl}/papel-white-logo.png`}
        width="108"
        height="32"
        alt="Papel logo"
      />
    </Section>
  );
};

export default Header;

const header = {
  padding: "20px 32px",
  background: "black"
};