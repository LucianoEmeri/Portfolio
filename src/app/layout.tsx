import "./globals.css";
import Home from "./Home/page";


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
