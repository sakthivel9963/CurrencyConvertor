import React from 'react';
import { StatusBar, Text } from 'react-native';
import { Container } from '../components/Container';

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
    <Text>Sakthivel</Text>
  </Container>
);

export default Home;
