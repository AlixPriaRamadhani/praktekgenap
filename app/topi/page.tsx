import ProductGrid from "@/components/produkGrid";

export default function TopiPage() {
  const products = [
    { name: "Topi Baseball", price: "Rp 85.000" },
    { name: "Topi Bucket", price: "Rp 95.000" },
    { name: "Topi Snapback", price: "Rp 100.000" },
  ];

  return (
    <div className="p-8 text-white">
      <h1 className="text-2xl font-bold mb-6">Topi</h1>
      <ProductGrid products={products} />
    </div>
  );
}