import {Text,} from "@react-email/components";
import * as React from "react";
import Layout from "./components/Layout";

export const Ten = () => (
  <Layout image={"17PapelKartAylikHesapozeti"} title="Papel Kart Aylık Hesap Özeti" paragraphType={1}>
    <>
      <Text>
        <b>{"{PapelCardNumber}"}</b> numaralı Papel Kart'ına ait aylık hesap özetini ekte görebilirsin.
      </Text>
    </>
  </Layout>
);

export default Ten;
