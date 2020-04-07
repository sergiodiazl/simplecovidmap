import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container type="content">
        <Link to="/"><p>Covid-19 Map</p></Link>
        <ul>
          <li>
            <Link to="/">Map</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
