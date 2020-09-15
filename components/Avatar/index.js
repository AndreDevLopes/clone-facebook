import React from 'react';


import { Container , User ,UserActive} from './styles';

const Avatar = ({source , online}) => {
  return (<Container>
      <User source ={source}/>
      {online && <UserActive />}
  </Container>);
}

export default Avatar;