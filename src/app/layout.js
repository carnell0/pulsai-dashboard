import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "PulsAI - Intelligent CRM",
  description: "Next-gen AI CRM Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
