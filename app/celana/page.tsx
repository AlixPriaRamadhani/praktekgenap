import ProductGrid from "@/components/produkGrid";

export default function CelanaPage() {
  const products = [
    { name: "Celana Jeans", price: "Rp 180.000" },
    { name: "Celana Chino", price: "Rp 160.000" },
  ];

  return (
    <div className="p-8 text-white">
      <h1 className="text-2xl font-bold mb-6">Celana</h1>
      <ProductGrid products={products} />
    </div>
  );
}