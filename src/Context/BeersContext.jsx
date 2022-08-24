import axios from "axios";
import { createContext, useState } from "react";

const BeersContext = createContext();

function BeersProvider({ children }) {

  const [beers, setBeers] = useState([])

  async function getBeers() {
    const { data } = await axios.get("https://api.punkapi.com/v2/beers")
    setBeers(data)
  }

  return (
    <BeersContext.Provider value={{ getBeers, beers, setBeers }}>
      {children}
    </BeersContext.Provider>
  )
}

export { BeersContext, BeersProvider }