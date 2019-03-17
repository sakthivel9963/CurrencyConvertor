import React from 'react';
import { StatusBar } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';

// Return a funciton using two method
// First Method
// const Home = () => {
//   return (
//     <Container>
//       <Text>Sakthivel</Text>
//     </Container>
//   );
// };

// Second Method
const Home = () => (
  <Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <Logo />
  </Container>
);

export default Home;
