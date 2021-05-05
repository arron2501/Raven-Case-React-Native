import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import Carousel from '../../../components/Home/NewDesigns/Carousel';
import Items from '../../../components/Home/NewDesigns/Items';

export default function NewDesigns() {
  return (
    <ScrollView>
      <Carousel />
      <Items />
    </ScrollView>
  );
}
