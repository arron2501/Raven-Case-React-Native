import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';

import Item from '../../components/ProductDetails/Item';
import Dropdown from '../../components/ProductDetails/Dropdown';
import Description from '../../components/ProductDetails/Description';
import Showcase from '../../components/ProductDetails/Showcase';
import Reviews from '../../components/ProductDetails/Reviews';
import ActionButtons from '../../components/ProductDetails/ActionButtons';

class ProductDetails extends Component {
  render() {
    return (
      <View>
        <ScrollView style={{marginBottom: 80}}>
          <Item toReviews={() => this.props.navigation.navigate('Reviews')} />
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
          <Reviews
            toReviews={() => this.props.navigation.navigate('Reviews')}
          />
        </ScrollView>
        <ActionButtons />
      </View>
    );
  }
}

export default ProductDetails;
