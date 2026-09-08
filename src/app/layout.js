import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Minh & Phương - Wedding Story",
  description: "Câu chuyện tình yêu và thiệp cưới online của Minh & Phương",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className={`${inter.variable} ${cormorant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
