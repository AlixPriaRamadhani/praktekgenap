import ProductGrid from "@/components/produkGrid";

export default function TshirtKidsPage() {
  const products = [
    { name: "T-shirt Kids Basic", price: "Rp 90.000" },
    { name: "T-shirt Kids Print", price: "Rp 110.000" },
    { name: "T-shirt Kids Karakter", price: "Rp 120.000" },
  ];

  return (
    <div className="p-8 text-white">
      <h1 className="text-2xl font-bold mb-6">T-shirt Kids</h1>
      <ProductGrid products={products} />
    </div>
  );
}