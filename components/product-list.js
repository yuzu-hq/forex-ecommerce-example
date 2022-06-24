import ProductListing from "./product-listing";

export default function ProductList({ currency, products }) {
  return (
    <div className="">
      <h2 className="sr-only">Products</h2>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <ProductListing key={product.id} currency={currency} {...product} />
        ))}
      </div>
    </div>
  );
}
