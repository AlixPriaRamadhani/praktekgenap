import ProductGrid from "@/components/produkGrid";

export default function JacketPage() {
  const products = [
    { name: "Jacket Bomber", price: "Rp 350.000" },
    { name: "Jacket Hoodie", price: "Rp 280.000" },
    { name: "Jacket Denim", price: "Rp 300.000" },
  ];

  return (
    <div className="p-8 text-white">
      <h1 className="text-2xl font-bold mb-6">Jacket</h1>
      <ProductGrid products={products} />
    </div>
  );
}