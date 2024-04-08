import {Text,} from "@react-email/components";
import * as React from "react";
import Layout from "./components/Layout";

export const Ten = () => (
  <Layout image={"2SifreYenilemeBasarili"} title="Şifre Yenileme Başarılı" paragraphType={2}>
    <>
      <Text>Papel hesabının şifresi başarıyla değiştirildi. <br/>
        Güvenliğin için şifreni veya diğer giriş bilgilerini kimseyle paylaşma.</Text>
    </>
  </Layout>
);

export default Ten;
