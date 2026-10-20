// components/ProductGrid.tsx
type Product = { name: string; price: string };

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((p, i) => (
        <div key={i} className="bg-gray-800 rounded-lg p-4">
          <div className="bg-gray-700 h-40 rounded-md mb-3" />
          <p className="font-medium">{p.name}</p>
          <p className="text-gray-400 text-sm">{p.price}</p>
        </div>
      ))}
    </div>
  );
}