"use client";

import { CookiesProvider } from "react-cookie";
import React from "react";

const MyCookieProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <CookiesProvider>{children}</CookiesProvider>;
};

export default MyCookieProvider;
