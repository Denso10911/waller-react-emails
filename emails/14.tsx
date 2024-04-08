import {Text,} from "@react-email/components";
import * as React from "react";
import Layout from "./components/Layout";

export const Ten = () => (
  <Layout image={"14MeslekBilgisiGuncellendi"} title="Meslek Bilgisi Güncellendi" paragraphType={2}>
    <>
      <Text>
        Yaptığın değişiklik üzerine meslek bilgilerin "<b>{"{ProfInfo}"}</b>" olarak değiştirildi.
      </Text>
    </>
  </Layout>
);

export default Ten;
