import Footer from "@/components/footer";
import Header from "@/components/header";
import Wrapper from "@/components/wrapper";
import "./globals.css";

/**
 * TODO here are the two most important point of SEO
 * make sure this application keywords
 */
export const metadata = {
  title: "{good to know: this is the main entry point of SEO}",
  description: "this description should hove the most searchable keywords",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="icon" href="/logo.svg" sizes="any" />
        <title>Penzion Atrium</title>
      </head>
      <body>
        <Header />
        <Wrapper>{children}</Wrapper>
        <Footer />
      </body>
    </html>
  );
}
