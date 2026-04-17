import { useState } from "react";
import { api } from "../api/client";

function CreateProduct({ onCreated }: { onCreated: () => void }) {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const handleCreate = async () => {
        const res = await api.post("/products", {
            name,
            price: Number(price)    
        });

        if (res.id) {
            alert("Producto creado");
            setName("");
            setPrice("");
            onCreated();
        } else {
            alert("Error al crear");
        }
    };

    return (
    <div>
      <h2>Crear producto</h2>

      <input
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Precio"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={handleCreate}>Crear</button>
    </div>
  );
}

export default CreateProduct;