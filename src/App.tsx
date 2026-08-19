import { useEffect, useState } from 'react';
import api from './api/axios';

function App() {
  const [products, setProducts] = useState<any[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    api.get('/Product')
      .then((response) => {
        // Бекендът връща обект { items: [...], totalCount: X }
        const dataList = response.data?.items || [];
        setProducts(dataList);
        setLoading(false);
      })
      .catch((err) => {
        console.error('API Error:', err);
        setError(err.message || 'Грешка при връзката с API-то');
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">
          🛒 Каталог с продукти
        </h1>

        {loading && <p className="text-gray-500">Зареждане на продукти...</p>}

        {error && (
          <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-4">
            ❌ <strong>Грешка:</strong> {error}
          </div>
        )}

        {!loading && !error && (
          <div>
            <p className="text-green-600 font-semibold mb-4">
              ✅ Успешна връзка! Намерени продукти: {products.length}
            </p>

            {products.length === 0 ? (
              <p className="text-gray-500">Няма налични продукти в базата данни.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {products.map((p: any) => (
                  <div key={p.id} className="border p-4 rounded-lg shadow-sm bg-gray-50 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">{p.name}</h3>
                      <p className="text-xs font-semibold text-blue-500 uppercase">{p.brand} | {p.category}</p>
                      <p className="text-gray-600 text-sm mt-1">{p.description}</p>
                    </div>
                    <div className="mt-3 flex justify-between items-center">
                      <span className="text-green-700 font-bold text-xl">${p.price}</span>
                      <span className="text-xs text-gray-500">Наличност: {p.stockQuantity} бр.</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;