import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "antd";
import { ShoppingCart } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Store",
  description:
    "Sua loja online - Encontre os melhores produtos com ótimos preços e ofertas exclusivas.",
  openGraph: {
    title: "AI Store",
    description:
      "Sua loja online - Encontre os melhores produtos com ótimos preços e ofertas exclusivas.",
    siteName: "AI Store",
    locale: "pt_BR",
    type: "website",
  },
};

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products");

  const data = await res.json();

  return data.slice(0, 4);
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="bg-gray-50 min-h-screen">
      <section
        className="border-b bg-cover bg-right bg-no-repeat relative"
        style={{ backgroundImage: "url('/images/hero-products.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Encontre os melhores produtos
            </h1>

            <p className="text-gray-600 mb-8 text-lg">
              Explore nossa loja e descubra ofertas incríveis em diversas
              categorias.
            </p>

            <Link
              href="/products"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition"
            >
              Explorar Produtos
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-10 text-gray-800">
            Produtos em destaque
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl border p-4 hover:shadow-md transition"
              >
                <div className="h-48 flex items-center justify-center mb-4">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={150}
                    height={150}
                    className="object-contain h-full"
                  />
                </div>

                <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                  {product.title}
                </h3>

                <p className="font-semibold text-gray-900 mb-4">
                  R$ {product.price}
                </p>

                <Button
                  type="primary"
                  icon={<ShoppingCart size={16} />}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Adicionar ao carrinho
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="font-semibold text-lg mb-2">Entrega rápida</h3>
            <p className="text-gray-600 text-sm">
              Receba seus produtos com rapidez em todo o Brasil.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Pagamento seguro</h3>
            <p className="text-gray-600 text-sm">
              Diversos métodos de pagamento com total segurança.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Grandes ofertas</h3>
            <p className="text-gray-600 text-sm">
              Promoções exclusivas em várias categorias de produtos.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
