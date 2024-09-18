import { Metadata } from 'next';
import "./globals.css";
import Home from "./Home/page";

export const metadata: Metadata = {
  title: 'Luciano Emerí ▸ Portfolio',
  description: 'Bienvenido a mi portfolio',
};

export default function RootLayout({
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Home/>
      </body>
    </html>
  );
}
