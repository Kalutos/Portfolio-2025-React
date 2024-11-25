import { useEffect, useState } from "react";

function FetchData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND_URL + "/api/hello")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return <div>{data ? data.message : "Loading..."}</div>;
}

export default FetchData;
