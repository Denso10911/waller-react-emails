import {Text,} from "@react-email/components";
import * as React from "react";
import Layout from "./components/Layout";

export const Ten = () => (
  <Layout image={"18SozlemeDetaylari"} title="Sözleşme Detayları" paragraphType={2}>
    <>
      <Text>
        <b>{"{AgreementName}"}</b> sözleşmesini ekte seninle paylaşıyoruz.
      </Text>
      <Text>
        Dilersen mobil uygulama menüsünden Sözleşmeler sekmesine tıklayarak tüm sözleşmelerini görüntüleyebilirsin.
      </Text>
    </>
  </Layout>
);

export default Ten;
