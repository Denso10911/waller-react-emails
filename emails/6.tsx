import {Text,} from "@react-email/components";
import * as React from "react";
import Layout from "./components/Layout";
import DefaultButton from "./components/DefaultButton";

export const Ten = () => (
  <Layout image={"6EPostaDogrulama"} title="E-Posta Doğrulama" paragraphType={2}>
    <>
      <Text>
        Şifre yenileme işlemini tamamlayabilmen için e-posta adresini doğrulaman gerekiyor. Aşağıdaki butona tıklayarak doğrulamayı tamamlayabilirsin.
      </Text>
      <DefaultButton label="E-Posta Adresimi Doğrula" link="{VerifyMyEmailAddress}" />
    </>
  </Layout>
);

export default Ten;
