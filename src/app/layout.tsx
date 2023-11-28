import {Metadata} from "next";
import "src/styles/root.scss";
import React from "react";
import {Instrument_Sans} from "next/font/google";
import "src/styles/global.css";
import ReduxProvider from "@/providers/redux.provider";
import ReactQueryProvider from "@/providers/react-query.provider";
import MyDndProvider from "@/providers/dnd.provider";

export const metadata: Metadata = {
  title: "Frontend Mentor | Link-sharing app - created by Gihwan-dev",
  description: "Generated by create next app",
  viewport: {
    initialScale: 1,
    width: "device-width",
  },
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "/icon.png",
      sizes: "32x32",
    },
  ],
};

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  display: "swap",
});
export default function RootLayout({
  children,
}: {
  login: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={instrumentSans.className}>
      <body>
        <MyDndProvider>
          <ReactQueryProvider>
            <ReduxProvider>{children}</ReduxProvider>
          </ReactQueryProvider>
        </MyDndProvider>
      </body>
    </html>
  );
}
