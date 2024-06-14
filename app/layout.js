
import "./globals.css";


export const metadata = {
  title: "Gabriela Aguilar",
  description: "Portafolio de Gabriela Aguilar Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
