import { Fragment, useContext, useEffect } from "react";
import { BeersContext } from "../../Context/BeersContext";
import BeerCard from "./BeerCard";
import Footer from "../footer/Footer";
import Header from "../../Layout/Header";
import { Typography } from "@mui/material";
import "../../Assets/Styles/beers.scss"

const Beers = () => {

  const { getBeers, beers } = useContext(BeersContext)

  useEffect(() => {
      getBeers()
  }, [])


  return(
    <div className="container-body">
      <Header />
      <Typography variant="h6" align="center" className="beer-title">
        The best beers in the world you can find here
      </Typography>
      <BeerCard beer={beers}/>
      <Footer />
     
    </div>
  )  
}

export default Beers;