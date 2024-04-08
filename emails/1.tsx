import {Text,} from "@react-email/components";
import * as React from "react";
import Layout from "./components/Layout";

export const Ten = () => (
  <Layout image={"1Aramizahogeldin"} title="Aramıza hoş geldin!">
    <>
      <Text> Seni aramızda gördüğümüz için çok mutluyuz. Hızlı, kolay ve güvenli bir finans deneyimi seni bekliyor. Bu
        yeni yolculukta birçok Papel avantajının tadını çıkarabilirsin. İşte bunlardan bazıları:</Text>
      <Text> <b>Sorunsuz İşlemler:</b> Hızlı ve kolay finansal işlemlerin keyfini çıkar.</Text>
      <Text> <b>Fatura Öde, Kolayca Bölüştür:</b> Tüm kurum ödemelerini Papel mobil uygulamasıyla ödeyebilir, istediğin
        kişiyle ödemeleri bölüşebilirsin.</Text>
      <Text> <b>7/24 Ücretsiz Para Transferi:</b> Mesai saatini kontrol etmene hiç gerek yok. Dilediğin gün ve saatte
        para gönder ya da al.</Text>
      <Text> <b>Ücret ve Aidat Yok:</b> Papel'i kullanmanın keyfini ücretsiz yaşa!</Text>
      <Text><b>Sade ve Basit Cüzdan Yönetimi:</b> Kolay kullanıma sahip arayüz ile cüzdanını yönet.</Text>
      <Text> Soruların için bize <a href="mailto:destek@papel.com.tr">destek@papel.com.tr</a> mail adresinden veya 0 850
        241 24 24 numaralı telefondan ulaşabilirsin.</Text>
    </>
  </Layout>
);

export default Ten;
