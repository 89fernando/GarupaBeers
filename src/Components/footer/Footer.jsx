import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import "../../Assets/Styles/footer.scss";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.linkedin.com/in/89fernando/">
        Linkedin
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Footer = () => {


  return (
    <Box  sx={{ bgcolor: 'background.paper', py: 6 }} className='footer'>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Fernando Soares
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}


export default Footer;