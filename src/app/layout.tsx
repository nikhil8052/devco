// import type { Metadata } from "next";
import "./globals.css";
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Script from "next/script"; 
config.autoAddCss = false;



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body>
        {/*  chatbot script */}
        <Script
          id="chatbot-script"
          strategy="lazyOnload"
        >
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
        <div className="main-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}


