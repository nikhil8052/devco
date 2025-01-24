import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Script from "next/script";
import Head from "next/head";

config.autoAddCss = false;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* Add favicon */}
        <link rel="icon" href="/cropped-favicon44.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/cropped-favicon44.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        {/* Chatbot script */}
        <Script id="chatbot-script" strategy="lazyOnload">
          {`
            (function(w, d) {
              w.CollectId = "5ed144e1f906363bd69e66cf"; 
              var h = d.head || d.getElementsByTagName("head")[0]; 
              var s = d.createElement("script"); 
              s.setAttribute("type", "text/javascript"); 
              s.async = true; 
              s.setAttribute("src", "https://collectcdn.com/launcher.js"); 
              h.appendChild(s); 
            })(window, document);
          `}
        </Script>
        <script
          async="async"
          src="https://mm-uxrv.com/js/business_8851188b-aaec-4481-83a4-c53237e6c804-46897532.js"
        ></script>
        <div className="main-wrapper">{children}</div>
      </body>
    </html>
  );
}
