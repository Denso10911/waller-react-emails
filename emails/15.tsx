import {Text,} from "@react-email/components";
import * as React from "react";
import Layout from "./components/Layout";

export const Ten = () => (
  <Layout image={"15AylikNetGelirBilgisiGuncellendi"} title="Aylık Net Gelir Bilgisi Güncellendi" paragraphType={2}>
    <>
      <Text>
        Yaptığın değişiklik üzerine aylık net gelirin "<b>{"{MonthlyNetIncome}"}</b>" olarak değiştirildi.
      </Text>
    </>
  </Layout>
);

export default Ten;
