import React, {Component} from 'react';
import {ScrollView} from 'react-native';

import Header from '../../components/Home/Index/Header';
import Carousel from '../../components/Home/Index/Carousel';
import Menu from '../../components/Home/Index/Menu';
import Showcase from '../../components/Home/Index/Showcase';

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
