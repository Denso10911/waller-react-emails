import {Text,} from "@react-email/components";
import * as React from "react";
import Layout from "./components/Layout";

export const Ten = () => (
  <Layout image={"8ParaYatrmaBasarili"} title="Para Transferi Başarılı" paragraphType={2}>
    <>
      <Text>
        Başka bir Papel cüzdanına yaptığın para transferi başarıyla tamamlandı.
      </Text>
    </>
  </Layout>
);

export default Ten;
