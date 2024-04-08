import {Text,} from "@react-email/components";
import * as React from "react";
import Layout from "./components/Layout";

export const Ten = () => (
  <Layout image={"5AylikHesapozeti"} title="Aylık Hesap Özeti" paragraphType={1}>
    <>
      <Text>
        <b>{`{PapelUserNumber}`}</b> numaralı Papel hesabına ait aylık hesap özetini ekte görebilirsin.
      </Text>
    </>
  </Layout>
);

export default Ten;
