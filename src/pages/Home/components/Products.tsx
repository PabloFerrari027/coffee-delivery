import Product from "@/components/Product";
import useProducts from "@/hooks/useProducts";

export default function Products() {
  const { products } = useProducts();

  return (
    <section className="flex-1 max-md:px-10 px-20 mt-20 mb-20">
      <h2 className="font-maven max-lg:text-center max-lg:text-2xl text-3xl font-bold">
        Nossos cafés
      </h2>

      <div className="flex-1 grid max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 grid-cols-4 gap-10 mt-10 ">
        {products.map((product) => (
          <Product
            className="mx-auto"
            key={product.id}
            id={product.id}
            tags={product.tags}
            title={product.title}
            summary={product.summary}
            price={product.price}
            imgURL={product.imgURL}
            imgAlt={`Imagem do produto ${product.title}`}
          />
        ))}
      </div>
    </section>
  );
}
