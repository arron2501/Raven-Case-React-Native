import React from 'react';
import {ScrollView} from 'react-native';

import Summary from '../../../components/Reviews/Summary';
import SortButtons from '../../../components/Reviews/SortButtons';
import Items from '../../../components/Reviews/Items';

export default function Reviews() {
  return (
    <ScrollView>
      <Summary />
      <SortButtons />
      <Items />
    </ScrollView>
  );
}
