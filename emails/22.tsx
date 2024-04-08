import {Text,} from "@react-email/components";
import * as React from "react";
import Layout from "./components/Layout";
import DefaultButton from "./components/DefaultButton";

export const Ten = () => (
  <Layout image={"22EPostaDogrulama"} title="E-Posta Doğrulama" paragraphType={2}>
    <>
      <Text>
        İşlemi tamamlayabilmen için e-posta adresini doğrulaman gerekiyor.<br/> Aşağıdaki butona tıklayarak doğrulamayı tamamlayabilirsin.
      </Text>
      <DefaultButton label="E-Posta Adresimi Doğrula" link="{VerifyMyEmailAddress}" />
      
    </>
  </Layout>
);

export default Ten;
