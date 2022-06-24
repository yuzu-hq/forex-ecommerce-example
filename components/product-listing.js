import Image from "next/image";

export default function ProductListing({ id, name, href, price, imageSrc, imageAlt, currency }) {
  return (
    <a key={id} href={href} className="group">
      <div className="flex w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <Image
          alt={imageAlt}
          className="w-full h-full object-center object-cover group-hover:opacity-75"
          placeholder="blur"
          src={imageSrc}
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">
        {price.toLocaleString("en-US", { style: "currency", currency, currencyDisplay: "symbol" })}
      </p>
    </a>
  );
}
