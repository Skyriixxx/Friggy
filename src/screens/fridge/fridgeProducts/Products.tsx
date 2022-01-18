import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { FlatList, Icon, Image } from 'native-base'
import Ionicon from 'react-native-vector-icons/Ionicons'
import Swipeable from 'react-native-gesture-handler/Swipeable';

import CommonColor from '../../../theme/color';
import SecuredStorage from '../../../utils/SecuredStorage';
import style from './ProductsStyles';
import Product from '../../../type/Product'
import BaseProps from '../../../type/BaseProps';


interface Props extends BaseProps {

}

interface State {
  products: Product[];
}

export default class Products extends React.Component<Props, State> {
  public listener: any

  public constructor(props: Props) {
    super(props);
    // Init State
    this.state = {
      products: []
    };
  }


  public async componentDidMount() {
      const products: Product[] = await SecuredStorage.getProductsData();
      this.setState({products: products});
      this.listener = this.props.navigation.addListener(
        'focus', async () => {
            const products: Product[] = await SecuredStorage.getProductsData();
            this.setState({products: products});
        }
      );
  }

  public async deleteProduct(id: number) {
      var products: Product[] = this.state.products;
      if (this.state.products.length > id) {
          products.splice(id, 1);
          await SecuredStorage.saveProductData(products);
          this.setState({products: products});
      }
  }
  
  public renderSwipeRightAction() {
      return (
        <View style={style.swipeView}>
          <Ionicon name='md-trash-outline' size={35} color={'white'}/>
        </View>
      )
  }

  public renderProducts(item: Product, index: number) {
      return (
          <Swipeable overshootRight={false} onSwipeableRightOpen={() => this.deleteProduct(index)} renderRightActions={() => this.renderSwipeRightAction()}>
              <View style={style.productView}>
                  <View style={style.productImageView}>
                      <Image size={70} source={{ uri: item.image }} alt='imageProduct'/>
                  </View>
                  <View style={style.productNameView}>
                      <Text style={style.productName}>{item.name}</Text>
                  </View>
              </View>
          </Swipeable>
      )
  }

  public render() {
    const {products} = this.state;
    return (
      <View style={style.container}>
          <View style={style.container}>
              <View style={style.header}>
                  <TouchableOpacity style={style.buttonBack} onPress={() => this.props.navigation.goBack()}>
                      <Ionicon name='md-arrow-back' size={35} color={'black'}/>
                  </TouchableOpacity>
              </View>
              <View style={style.body}>
                  <FlatList
                    data={products}
                    renderItem={({item, index}) => this.renderProducts(item, index)}
                    keyExtractor={(item) => item.id}
                    nestedScrollEnabled
                  />
              </View>
          </View>
      </View>
    )
  }  
}
