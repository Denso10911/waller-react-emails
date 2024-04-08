import {Text,} from "@react-email/components";
import * as React from "react";
import Layout from "./components/Layout";

export const Ten = () => (
  <Layout image={"16ParaYatirmaBasarili"} title="IBAN'a Para Transferi Başarılı" paragraphType={2}>
    <>
      <Text>
        IBAN'a yaptığın para transferi başarıyla tamamlandı.
      </Text>
    </>
  </Layout>
);

export default Ten;
