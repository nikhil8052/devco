// app/layout.tsx
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Script from "next/script";
import Head from "next/head";

// Disable automatic addition of CSS for FontAwesome
config.autoAddCss = false;

export const metadata = {
  title: "Your Site Title",
  description: "Your site description",
  icons: {
    icon: "/cropped-favicon44.png",
    apple: "/cropped-favicon44.png",
  },
  manifest: "/site.webmanifest",
  viewport: "width=device-width, initial-scale=1.0",
  charset: "UTF-8",
  other: {
    "google-site-verification": "KtPvzJjqtT9qrm75U0lpt6_CNkLPF2K4SzYE7ktKKuk",
    "http-equiv": "Content-Security-Policy",
    "content": "default-src 'self'; img-src https://*; child-src 'none';",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-E6FYK5PYXZ"
      strategy="afterInteractive"
    />
    <Script
      id="gtag-init"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-E6FYK5PYXZ');
        `,
      }}
    />
        
        {/* Lazy-load slick-carousel styles */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
          media="print"
          onLoad={(e) => {
            (e.currentTarget as HTMLLinkElement).media = "all";
          }}
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"
          media="print"
          onLoad={(e) => {
            (e.currentTarget as HTMLLinkElement).media = "all";
          }}
        />

        {/* If you really need FontAwesome all.min.css (not recommended) */}
        {/* 
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          media="print"
          onLoad="this.media='all'"
        /> 
        */}        
      </Head>
      <body>
        
        <Script
          id="chatbot-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              setTimeout(() => {
                document.cookie = "collect_chat_page_load=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                (function(w, d) {
                  w.CollectId = "5ed144e1f906363bd69e66cf";
                  var h = d.head || d.getElementsByTagName("head")[0];
                  var s = d.createElement("script");
                  s.setAttribute("type", "text/javascript");
                  s.async = true;
                  s.setAttribute("src", "https://collectcdn.com/launcher.js?v=" + new Date().getTime());
                  h.appendChild(s);
                })(window, document);
              }, 500);
            `,
          }}
        />
        <Script
          src="https://mm-uxrv.com/js/business_8851188b-aaec-4481-83a4-c53237e6c804-46897532.js"
          strategy="lazyOnload"
        />
        <div className="main-wrapper">{children}</div>
      </body>
    </html>
  );
}
