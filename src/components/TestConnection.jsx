import axios from "axios";
import { useEffect, useState } from "react";

const TestConnection = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/users") // Remplacez par un endpoint valide
      .then((response) => {
        setData(response.data); // Sauvegarde les données reçues
      })
      .catch((err) => {
        setError(err.message); // Sauvegarde les erreurs, si présentes
      });
  }, []);

  return (
    <div>
      <h1>Test de la connexion Backend</h1>
      {error ? (
        <p style={{ color: "red" }}>Erreur: {error}</p>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
};

export default TestConnection;
