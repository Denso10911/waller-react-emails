import {Text,} from "@react-email/components";
import * as React from "react";
import Layout from "./components/Layout";
import DefaultButton from "./components/DefaultButton";

export const Ten = () => (
  <Layout image={"4SifreniYenile"} title="Şifreni Yenile" paragraphType={2}>
    <>
      <Text>
        Aşağıdaki linke tıklayarak Papel hesabının şifresini yenileyebilirsin.
      </Text>
      <DefaultButton label="Şifremi Yenile" link="{ResetMyPassword}" />
    </>
  </Layout>
);

export default Ten;
