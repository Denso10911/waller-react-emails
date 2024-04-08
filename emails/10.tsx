import {Text,} from "@react-email/components";
import * as React from "react";
import Layout from "./components/Layout";

export const Ten = () => (
  <Layout image={"10HesabinaParaGeldi"} title="Hesabına Para Geldi" paragraphType={1}>
    <>
      <Text>
        Papel cüzdanına para geldi! İşlem detaylarını görmek için mobil uygulamadan ya da <a href="https://papel.com.tr" target="__blank"><b>papel.com.tr</b></a> üzerinden Papel hesabına giriş yapabilirsin.
      </Text>
    </>
  </Layout>
);

export default Ten;
