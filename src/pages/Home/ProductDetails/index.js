import React, {Component} from 'react';
import {ScrollView} from 'react-native';

import Item from '../../../components/Home/ProductDetails/Item';
import Dropdown from '../../../components/Home/ProductDetails/Dropdown';
import Description from '../../../components/Home/ProductDetails/Description';
import Showcase from '../../../components/Home/ProductDetails/Showcase';
import Reviews from '../../../components/Home/ProductDetails/Reviews';
import ActionButtons from '../../../components/Home/ProductDetails/ActionButtons';

class ProductDetails extends Component {
  render() {
    return (
      <ScrollView>
        <Item />
        <Dropdown />
        <Description />
        <Showcase
          toProductDetails={() =>
            this.props.navigation.navigate('ProductDetails')
          }
          toSimilarProducts={() =>
            this.props.navigation.navigate('SimilarProducts')
          }
        />
        <Reviews toReviews={() => this.props.navigation.navigate('Reviews')} />
        <ActionButtons />
      </ScrollView>
    );
  }
}

export default ProductDetails;
