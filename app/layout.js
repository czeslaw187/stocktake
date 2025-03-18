import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import 'bootstrap/dist/css/bootstrap.min.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Keg Counter",
  description: "Stock counter for the Hase",
  author: 'Grzegorz Michniewicz',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen min-h-screen bg-gradient-to-br bg-no-repeat from-cyan-400 to-lime-200`}
      >
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
