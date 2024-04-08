import {Text,} from "@react-email/components";
import * as React from "react";
import Layout from "./components/Layout";
import CopyButton from "./components/CopyButton";

export const Ten = () => (
  <Layout image={"28PapelsifreOlusturma"} title="Papel Şifre Oluşturma" paragraphType={2}>
    <>
      <Text>
        Aşağıdaki linke tıklayarak şifre oluşturma işlemini gerçekleştirebilirsin:
      </Text>
      <CopyButton text="{OtpCode}" />
    </>
  </Layout>
);

export default Ten;
