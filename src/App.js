import { useEffect, useState } from "react";
import api from "./api";

function App() {
  const [getData, setData] = useState({});

  useEffect(() => {
    api.get().then((response) => {
      setData(response.data);
    });
  }, []);

  console.log(getData);

  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}

export default App;
