import {Body, Container, Head, Heading, Hr, Html, Img, Preview, Section, Text} from "@react-email/components";
import Header from "../Header";
import * as React from "react";
import Footer from "../Footer";
import {baseUrl} from "../../helpers";

interface Props {
  image: string
  title: string
  paragraphType?: number
  children?: React.ReactNode
}

const Layout:React.FC<Props> = ({children, image, title, paragraphType}) => {
  return (
    <Html>
      <Head/>
      <Preview>You're now ready to make live transactions with Stripe!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Header/>
          <Hr style={hr}/>
          <Section style={body}>
            <Img
              src={`${baseUrl}/${image}.png`}
              width="120"
              height="120"
              alt={`${title} icon`}
            />
            <Heading as="h1">{title}</Heading>
            <Text>
              Merhaba <b>{"{CostumerName}"}</b>,
            </Text>
            {children}
            {paragraphType && <>
              {paragraphType === 1 ? <Text>
                Soru, görüş ve önerilerin için destek@papel.com.tr e-posta adresi <br/> veya 0 850 241 24 24 numaralı
                telefonumuzdan
                ulaşabilirsin.
              </Text> : <Text>
                Eğer bu işlem sana ait değilse bize destek@papel.com.tr e-posta adresi <br/> veya 0 850 241 24 24
                numaralı telefonumuzdan ulaşabilirsin.
              </Text>}
            </>}
            <Text style={{margin: "0"}}>
              Görüşmek üzere,
            </Text>
            <Text style={{margin: "0"}}>
              <b>Papel</b>
            </Text>
          </Section>
          <Footer/>
        </Container>
      </Body>
    </Html>
  );
};

export default Layout;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f6f9fc",
  margin: "12px auto",
  padding: "0",
  marginBottom: "64px",
};

const hr = {
  borderColor: "#f6f9fc",
  margin: "0"
};


const body = {
  padding: "32px 35px"
};
