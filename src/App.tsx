import { useEffect, useState } from "react";
import { api } from "./api/client";
import Login from "./pages/Login";
import CreateProduct from "./components/CreateProduct";

function App() {
  const [products, setProducts] = useState<any[]>([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  useEffect(() => {
    if (token) {
      api.get("/products").then(setProducts);
    }
  }, [token]);

  if (!token) {
    return <Login onLogin={() => setToken(localStorage.getItem("token"))} />;
  }

  return (
    <div>
      <h1>Productos</h1>
      <button onClick={logout}>Logout</button>
      <CreateProduct
      onCreated={() => api.get("/products").then(setProducts)}
      />
      {products.map((p) => (
        <div key={p.id}>
          {p.name} - {p.price}€
        </div>
      ))}
    </div>
  );
}

export default App;