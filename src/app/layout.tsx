import type { Metadata } from "next";
import "./globals.css";
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import FontAwesome CSS
config.autoAddCss = false; // Prevent FontAwesome from automatically adding CSS



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
        <Header />
        <div className="main-wrapper">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}


