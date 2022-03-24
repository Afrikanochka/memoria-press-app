import React from 'react'
import Container from '../container/Container'
import Navigation from '../navigation/Navigation';
import SubNavigation from '../subNavigation/SubNavigation';

const Header = () => {
    return (
      <>
        <Container>
        <Navigation />
        </Container>
        <SubNavigation />
      </>
    );
}

export default Header;