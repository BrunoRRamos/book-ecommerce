import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book E-Commerce",
  description: "Sua loja online de livros - Encontre os melhores títulos, autores renomados e ofertas imperdíveis.",
  openGraph: {
    title: "Book E-Commerce",
    description: "Sua loja online de livros - Encontre os melhores títulos, autores renomados e ofertas imperdíveis.",
    siteName: "Book E-Commerce",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  }
};


export default function Home() {
  return (
    <main>
      <h1>Home</h1>
    </main>
  );
}