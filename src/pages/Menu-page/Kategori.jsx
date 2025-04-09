import { useNavigate } from 'react-router-dom';

export default function Kategori() {
  const navigate = useNavigate();

  const categories = [
    { label: 'Makanan', path: 'makanan' },
    { label: 'Minuman', path: 'minuman' },
    { label: 'Nasi', path: 'nasi' },
    { label: 'Mie', path: 'mie' },
    { label: 'Bowl', path: 'sayur' },
    { label: 'Add On', path: 'addon' },
    { label: 'Snack', path: 'snack' },
    { label: 'All', path: '' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-10">
      {categories.map((cat) => (
        <button
          key={cat.path}
          onClick={() => navigate(`/menu/${cat.path}`)}
          className="bg-pink-500 text-white px-5 py-2 rounded-full hover:bg-pink-600 transition"
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
