import { Column, Img, Link, Row, Section, Text} from "@react-email/components";
import * as React from "react";
import {baseUrl} from "../../helpers";

const Footer = () => {
  return (
    <Section style={footer}>
      <Row style={{maxWidth: "215px"}}>
        <Column align="center">
          <Link
            href="https://play.google.com/store/apps/details?id=com.papelmobile"
          >
            <Img
              src={`${baseUrl}/googleplay-border.png`}
              width="100"
              height="28"
              alt="googleplay"
            />
          </Link>
        </Column>
        <Column align="center">
          <Link
            href="https://apps.apple.com/tr/app/papel-t%C3%BCrkiye/id1643288351?l=tr"
          >
            <Img
              src={`${baseUrl}/appstore-border.png`}
              width="100"
              height="28"
              alt="appstore"
            />
          </Link>
        </Column>
      </Row>
      <Row style={{margin: "24px auto", maxWidth: "312px"}}>
        <Column align="center">
          <Link
            href="http://www.facebook.com/papelapp"
          >
            <Img
              src={`${baseUrl}/facebook.png`}
              width="32"
              height="32"
              alt="facebook"
            />
          </Link>
        </Column>
        <Column  align="center">
          <Link
            href="http://www.twitter.com/papel_app"
          >
            <Img
              src={`${baseUrl}/X.png`}
              width="32"
              height="32"
              alt="X"
            />
          </Link>
        </Column>
        <Column  align="center">
          <Link
            href="http://www.linkedin.com/company/papelapp"
          >
            <Img
              src={`${baseUrl}/linkedin.png`}
              width="32"
              height="32"
              alt="linkedin"
            />
          </Link>
        </Column>
        <Column  align="center">
          <Link
            href="http://www.instagram.com/papel_app"
          >
            <Img
              src={`${baseUrl}/instagram.png`}
              width="32"
              height="32"
              alt="instagram"
            />
          </Link>
        </Column>
        <Column  align="center">
          <Link
            href="http://www.youtube.com/@Papel_app"
          >
            <Img
              src={`${baseUrl}/youtube.png`}
              width="32"
              height="32"
              alt="youtube"
            />
          </Link>
        </Column>
        <Column  align="center">
          <Link
            href="http://www.tiktok.com/@papel_app"
          >
            <Img
              src={`${baseUrl}/tiktok.png`}
              width="32"
              height="32"
              alt="tiktok"
            />
          </Link>
        </Column>
      </Row>
      <Row>
        <Column align="center">
          <Text style={greyText}>
            PAPEL ELEKTRONİK PARA VE ÖDEME HİZMETLERİ A.Ş.
          </Text>
          <Text  style={text}>
            Ayazağa Mah. Eski büyükdere Cad. No: 3-5 Kat: 14 Maslak / Sarıyer / İstanbul - Mersis No: 0721080593400001
          </Text>
        </Column>
      </Row>
    </Section>
  );
};

export default Footer;


const footer = {
  padding: "20px 32px",
  background: "black",
  color: "white",
  fontSize: "11px",
};

const greyText = {
  color: "#b0b2b4",
  fontSize: "11px",
  margin: 0
};

const text = {
  fontSize: "11px",
  margin: 0
};