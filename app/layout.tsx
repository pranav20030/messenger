import type { Metadata } from "next";

import "./globals.css";
import ToastContext from "./context/ToasterContext";
import AuthContext from "./context/AuthContext";
import ActiveStatus from "./components/ActiveStatus";



export const metadata: Metadata = {
  title: "Messenger",
  description: "Messenger",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <AuthContext>
        <ToastContext />
        <ActiveStatus />
        {children}
        </AuthContext>
       
      </body>
    </html>
  );
}
