import React from 'react';

import Container from 'components/Container';

const Footer = () => {
  return (
    <footer>
      <Container>
       <a href="https://www.sergiodl.com"><p> { new Date().getFullYear() },Sergio Diaz Leguizamon </p></a> 
      </Container>
    </footer>
  );
};

export default Footer;
