import {Text,} from "@react-email/components";
import * as React from "react";
import Layout from "./components/Layout";

export const Ten = () => (
  <Layout image={"9ParaYatirmaBasarili"} title="Para Transferi Başarısız" paragraphType={2}>
    <>
      <Text>
        Başka bir Papel cüzdanına yaptığın para transferi tamamlanamadı.
      </Text>
    </>
  </Layout>
);

export default Ten;
