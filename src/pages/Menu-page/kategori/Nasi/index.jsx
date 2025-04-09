import Kategori from "../../Kategori";
export default function Makanan() {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Menu Makanan</h1>
        <ul className="list-disc pl-5">
          <li>Nasi Goreng</li>
          <li>Sate Ayam</li>
          <li>Ayam Bakar</li>
        </ul>
        <Kategori/>
      </div>
    );
  }
  