import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "slick-carousel/slick/slick.css"; // Import Slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import Slick theme CSS";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS
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
        {/* Add meta tags for charset and viewport */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        {/* Chatbot script */}
        <Script
          id="chatbot-script"
          strategy="afterInteractive" // Ensures script is loaded after page content
          dangerouslySetInnerHTML={{
            __html: `
              setTimeout(() => {
                // Clear the cookie
                document.cookie = "collect_chat_page_load=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

                (function(w, d) { 
                  w.CollectId = "5ed144e1f906363bd69e66cf"; 
                  var h = d.head || d.getElementsByTagName("head")[0]; 
                  var s = d.createElement("script"); 
                  s.setAttribute("type", "text/javascript"); 
                  s.async = true; 
                  // Add a unique query string to prevent caching
                  s.setAttribute("src", "https://collectcdn.com/launcher.js?v=" + new Date().getTime()); 
                  h.appendChild(s); 
                })(window, document);
              }, 500);
            `,
          }}
        />
        {/* External script */}
        <Script 
          src="https://mm-uxrv.com/js/business_8851188b-aaec-4481-83a4-c53237e6c804-46897532.js"
          strategy="afterInteractive" // Ensures script is loaded after page content
        />

        <div className="main-wrapper">{children}</div>
      </body>
    </html>
  );
}
