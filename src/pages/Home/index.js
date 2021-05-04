import React, {Component} from 'react';
import {ScrollView} from 'react-native';

import Header from '../../components/Home/Header';
import Carousel from '../../components/Home/Carousel';
import Menu from '../../components/Home/Menu';
import Showcase from '../../components/Home/Showcase';

class Home extends Component {
  render() {
    return (
      <ScrollView>
        <Header />
        <Carousel />
        <Menu />
        <Showcase
          toProductDetails={() =>
            this.props.navigation.navigate('ProductDetails')
          }
          toNewDesigns={() => this.props.navigation.navigate('NewDesigns')}
        />
      </ScrollView>
    );
  }
}

export default Home;
