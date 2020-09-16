import React from 'react';


import { Container , User ,UserActive} from './styles';

const Avatar = ({source , online , story}) => {
  return (<Container>
      <User source ={source} story ={story}/>
      {online && <UserActive />}
  </Container>);
}

export default Avatar;