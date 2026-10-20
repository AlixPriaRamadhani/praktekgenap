import ProductGrid from "@/components/produkGrid";

export default function BackpackPage() {
  const products = [
    { name: "Backpack Basic", price: "Rp 200.000" },
    { name: "Backpack Waterproof", price: "Rp 250.000" },
  ];

  return (
    <div className="p-8 text-white">
      <h1 className="text-2xl font-bold mb-6">Backpack</h1>
      <ProductGrid products={products} />
    </div>
  );
}   