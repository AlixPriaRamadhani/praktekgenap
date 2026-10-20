import ProductGrid from "@/components/produkGrid";

export default function LongsleevePage() {
  const products = [
    { name: "Long Sleeve Basic", price: "Rp 130.000" },
    { name: "Long Sleeve Stripe", price: "Rp 150.000" },
    { name: "Long Sleeve Oversize", price: "Rp 165.000" },
  ];

  return (
    <div className="p-8 text-white">
      <h1 className="text-2xl font-bold mb-6">Long Sleeve</h1>
      <ProductGrid products={products} />
    </div>
  );
}