import { useState } from "react";

function Home() {
  const [data, setData] = useState(21 - new Date().getUTCDate())
  return (
    <h1>
      Faltam {data} dias para o começo do fim das nossas vidas 😬♥️
    </h1>
  );
}

export default Home;
