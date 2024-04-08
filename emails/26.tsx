import {Text,} from "@react-email/components";
import * as React from "react";
import Layout from "./components/Layout";
import CopyButton from "./components/CopyButton";

export const Ten = () => (
  <Layout image={"26PapelOnayKodu"} title="Papel Onay Kodu" paragraphType={2}>
    <>
      <Text>
        Papel hesabın için tek seferlik e-posta doğrulama kodu:
      </Text>
      <CopyButton text="{OtpCode}" />
      
    </>
  </Layout>
);

export default Ten;
