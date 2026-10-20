import ProductGrid from "@/components/produkGrid";

export default function KemejaPage() {
  const products = [
    { name: "Kemeja Flanel", price: "Rp 170.000" },
    { name: "Kemeja Formal", price: "Rp 220.000" },
    { name: "Kemeja Batik", price: "Rp 250.000" },
  ];

  return (
    <div className="p-8 text-white">
      <h1 className="text-2xl font-bold mb-6">Kemeja</h1>
      <ProductGrid products={products} />
    </div>
  );
}