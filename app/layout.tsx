import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { DashboardLayoutIndex } from "@/components/Layouts/DashboardLayout/DashboardLayoutIndex";

const wixMadeForTextRegular = localFont({
  src: "./fonts/WixMadeforText-Regular.ttf",
  variable: "--font-regular",
  weight: "100 900",
});
const wixMadeForTextMedium = localFont({
  src: "./fonts/WixMadeforText-Medium.ttf",
  variable: "--font-medium",
  weight: "100 900",
});
const wixMadeForTextBold = localFont({
  src: "./fonts/WixMadeforText-Bold.ttf",
  variable: "--font-bold",
  weight: "100 900",
});
const wixMadeForTextSemiBold = localFont({
  src: "./fonts/WixMadeforText-SemiBold.ttf",
  variable: "--font-semibold",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Afrilearn Web App",
  description: "A web app for educational purposes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${wixMadeForTextRegular.variable} ${wixMadeForTextMedium.variable} ${wixMadeForTextSemiBold.variable} ${wixMadeForTextBold.variable} antialiased`}
      >
        <DashboardLayoutIndex>{children}</DashboardLayoutIndex>
      </body>
    </html>
  );
}
