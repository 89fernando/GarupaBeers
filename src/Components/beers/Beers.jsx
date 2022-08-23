import { Fragment, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BeersContext } from "../../Context/BeersContext";

const Beers = () => {

  const navigate = useNavigate()
  const { getBeers, beers } = useContext(BeersContext)

  useEffect(() => {
      getBeers()
  }, [])

  function renderBeers() {

    beers.sort(function (beer, nextBeer) {
        if (beer.name.toLowerCase() > nextBeer.name.toLowerCase()) {
            return 1;
        }
        if (beer.name.toLowerCase() < nextBeer.name.toLowerCase()) {
            return -1;
        }
        return 0;
    })

    const beerCards = beers.map((beer, index) => {
        return (
            <>
              <h1>bla</h1>
            </>
        )
    })
    return (
      <h1>
        beers cards
      </h1>
    )
} 

  return(
    <h1>Página das Cervejas</h1>
  )  
}

export default Beers;