import React, { useState } from "react";
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import "../../Assets/Styles/beerCard.scss";
import usePagination from "../pagination/Pagination";
import { Pagination } from '@mui/material';


const BeerCard = ({ beer }) => {
console.log(beer);

let [page, setPage] = useState(1);
const PER_PAGE = 2;

const count = Math.ceil(beer.length / PER_PAGE);
const _DATA = usePagination(beer, PER_PAGE);

const handleChange = (e, p) => {
  setPage(p);
  _DATA.jump(p);
};

  return (
    <div>
      <Container lg={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={4}>
          {
            _DATA.currentData().map(item=>{
              return (
                <Grid item key={item.id} xs={12} sm={6} md={6}>
                  <Card className='beer-card'>
                    <div className='beer-image'>
                      <img src={item.image_url} alt="" />
                    </div>

                    <div className='beer-card-body'>
                      <Typography>
                        <h1>
                        {item.name}
                        </h1>
                        
                      </Typography>
                      <Typography>
                        <h4>
                        {item.description}
                        </h4>
                        
                      </Typography>
                      <div className='beer-features'>
                        <div>
                          <h5>
                            ABV: {item.abv}
                          </h5>
                        
                        </div>
                        <div>
                          <h5>
                            IBU: {item.ibu}
                          </h5>
                        </div>
                      </div>
                    </div>


                  </Card>
                </Grid>  
                
              )
            })
          }
        </Grid>
        <div className="pagination-div">
          <Pagination
            count={count}
            size="large"
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
          />
        </div>
      </Container>  
    </div>

    // <Container lg={{ py: 8 }} maxWidth="lg">
    //     <Grid container spacing={4}>

    //         <Grid key={beer.id} xs={12} sm={6} md={4}>
    //           <Card
    //             className='card'
    //             sx={{ height: '510px', display: 'flex', flexDirection: 'column'}}
    //           >
    //             <CardMedia
    //               className='cardMedia'
    //               component="img"
    //               sx={{
    //                 // 16:9
    //                 height: '50px'
    //               }}
    //               image={beer.image_url}
    //             >

    //             </CardMedia>
    //             <CardContent>
    //               <Typography>
    //                 {beer.name}
    //               </Typography>
    //               <Typography>
    //                 {beer.description}
    //               </Typography>
    //             </CardContent>
    //             <Typography>
    //               <h2>
    //                 {beer.abv}
    //               </h2>
    //               <h2>
    //                 {beer.ibu}%
    //               </h2>
    //             </Typography>
    //           </Card>  
    //         </Grid>

    //     </Grid>
    // </Container>
    
  )
}

export default BeerCard;