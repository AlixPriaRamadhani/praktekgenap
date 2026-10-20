import ProductGrid from "@/components/produkGrid";

export default function TshirtPage() {
  const products = [
    { name: "T-shirt Basic", price: "Rp 120.000" },
    { name: "T-shirt Print", price: "Rp 150.000" },
    { name: "T-shirt Oversize", price: "Rp 140.000" },
  ];

  return (
    <div className="p-8 text-white">
      <h1 className="text-2xl font-bold mb-6">T-shirt</h1>
      <ProductGrid products={products} />
    </div>
  );
}