import React from 'react';


import { Container , Text , Row , Button} from './styles';
import { Feather , MaterialCommunityIcons} from '@expo/vector-icons';

const AppBar = () => {
  return (<Container>
    <Text>facebook</Text>
    <Row>
      <Button>
        <Feather
          name='search'
          size={29}
          color='black'
        />
      </Button>
      <Button>
        <MaterialCommunityIcons
          name='facebook-messenger'
          size={29}
        
        />
      </Button>
    </Row>
  </Container>);
}

export default AppBar;