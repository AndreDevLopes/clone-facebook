import React from 'react';
import {ScrollView} from 'react-native'
import {AntDesign} from '@expo/vector-icons';

import { Container , Card , CardStory  ,
         CardUser, CardFooter , Text} from './styles';
import Avatar from '../Avatar';         

const Story = () => {
  return (
  <>
    <Container>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style ={{paddingLeft:11}}
        >
            <Card>
                <CardStory
                    source={require('../../assets/story1.jpg')}
                />
                <CardUser>
                    <AntDesign 
                        name="plus"
                        size={24}
                        color="#1777f2"
                    />
                </CardUser>
                <CardFooter>
                    <Text> Add to Story</Text>
                </CardFooter>
            </Card>

            <Card>
                <CardStory
                    source={require('../../assets/story2.jpg')}
                 />
                 <CardUser>
                    <Avatar
                        source={require('../../assets/user2.jpg')}
                        story={true}

                    />
                 </CardUser>
                 <CardFooter>
                     <Text>Wanessa J</Text>
                 </CardFooter>
            </Card>
            <Card>
                <CardStory
                    source={require('../../assets/story3.jpg')}
                 />
                 <CardUser>
                    <Avatar
                        source={require('../../assets/user3.jpg')}
                        story={true}

                    />
                 </CardUser>
                 <CardFooter>
                     <Text>Regi P</Text>
                 </CardFooter>
            </Card>
            <Card>
                <CardStory
                    source={require('../../assets/story4.jpg')}
                 />
                 <CardUser>
                    <Avatar
                        source={require('../../assets/user4.jpg')}
                        story={true}

                    />
                 </CardUser>
                 <CardFooter>
                     <Text>Anna M</Text>
                 </CardFooter>
            </Card>
        </ScrollView>
    </Container>
  </>
 );
}

export default Story;