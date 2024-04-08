import {Text,} from "@react-email/components";
import * as React from "react";
import Layout from "./components/Layout";

export const Ten = () => (
  <Layout image={"29YeniCihazdaOturumAclidi"} title="Yeni Cihazda Oturum Açıldı" paragraphType={2}>
    <>
      <Text>
        <b>{"{DeviceName}"}</b> üzerinde Papel hesabına giriş yapıldı.
      </Text>
    </>
  </Layout>
);

export default Ten;
