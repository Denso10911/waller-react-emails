import {Text,} from "@react-email/components";
import * as React from "react";
import Layout from "./components/Layout";

export const Ten = () => (
  <Layout image={"7ParaYatirmaBasarili"} title="Para Yatırma Başarılı" paragraphType={2}>
    <>
      <Text>
        Kartından Papel cüzdanına para yatırma işlemi başarıyla tamamlandı.
      </Text>
    </>
  </Layout>
);

export default Ten;
