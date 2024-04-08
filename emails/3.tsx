import {Text,} from "@react-email/components";
import * as React from "react";
import Layout from "./components/Layout";
import CopyButton from "./components/CopyButton";

export const Ten = () => (
  <Layout image={"3PapelSifreSifirlama"} title="Papel Şifre Sıfırlama" paragraphType={2}>
    <>
      <Text>
        Aşağıdaki linke tıklayarak şifre sıfırlama işlemini gerçekleştirebilirsin:
      </Text>
      <CopyButton text="{OtpCode}" />
    </>
  </Layout>
);

export default Ten;
