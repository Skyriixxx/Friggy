import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Button, Image } from 'native-base'
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { DateData } from 'react-native-calendars/src/types';
import Icon from 'react-native-vector-icons/FontAwesome'
import Ionicon from 'react-native-vector-icons/Ionicons'

import BaseProps from '../../type/BaseProps';
import style from './CalendarStyles';
import Product from '../../type/Product';
import SecuredStorage from '../../utils/SecuredStorage'
import Utils from '../../utils/Utils'
import { Swipeable, TouchableOpacity } from 'react-native-gesture-handler';
import { declareClass } from '@babel/types';


interface Props extends BaseProps {}

interface State {
  products: Product[]
  newProduct: Product
  isNewProduct: boolean
  newProductDLC: DateData
  number: number
  date: any
}

export default class Home extends React.Component<Props, State> {
  public listener: any

  public constructor(props: Props) {
    super(props);
    this.state = {
      products: [],
      newProduct: {id: '', name: '',  image: '', dlc: {timestamp: 0, day: 0, month: 0, year: 0, dateString: ''}},
      isNewProduct: false,
      number: 1,
      newProductDLC: {dateString: '', day: 0, month: 0, timestamp: 0, year: 0},
      date: new Date
    };
  }

  public async componentDidMount() {
    await this.CheckOrderData();
    let newProduct: Product = Utils.getParamFromNavigation(this.props.route, 'newProduct', {id: '', name: '', image: '', dlc: {timestamp: 0, day: 0, month: 0, year: 0, dateString: ''}});
    console.log(newProduct);
    this.listener = this.props.navigation.addListener(
      'focus', async () => {
        await this.CheckOrderData();
        newProduct = Utils.getParamFromNavigation(this.props.route, 'newProduct', {id: '', name: '', image: '', dlc: {timestamp: 0, day: 0, month: 0, year: 0, dateString: ''}});
        console.log(newProduct);
        if (newProduct.id != '') {
          this.setState({isNewProduct: true, newProduct: newProduct})
        }
      }
    );
    if (newProduct.id != '') {
      this.setState({isNewProduct: true, newProduct: newProduct})
    }
  }

  public componentWillUnmount() {
    this.listener;
  }

  public async CheckOrderData() {
    var product: Product;
    var i: number = 0; 
    var update: boolean = false;
    var products: Product[] = await SecuredStorage.getProductsData();
    while (i < products.length) {
      if (update == true) {
        i = 0;
        update = false;
      }
      if (i+1 < products.length) {
        if (products[i].dlc.day > products[i+1].dlc.day) {
            product = products[i];
            products[i] = products[i+1];
            products[i+1] = product;
            update = true
        }
      }
      i++;
    }
    this.setState({products: products});
  }

  public getExpirationDate(item: Product): string {
    var date = new Date
    var day: number = date.getDate();
    if (day+1 == item.dlc.day) {
      return "Demain"
    }
    if (day+2 == item.dlc.day) {
      return "Dans 2 jours"
    }
    return "Bientôt"
  }

  getColorExpirationDate(item: Product): string {
    var date = new Date
    var day: number = date.getDate();

    if (day+1 == item.dlc.day) {
      return "#F93154";
    }
    if (day+2 == item.dlc.day) {
      return "#FFA900";
    }
    return "#d3d2d2";
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
              <View style={{alignItems: 'center', marginRight: '4%'}}>
                  <Text style={[style.productTommorow, {color: this.getColorExpirationDate(item)}]}>{this.getExpirationDate(item)}</Text>
                  <Text style={style.productDate}>{item.dlc.day}/{item.dlc.month}/{item.dlc.year}</Text>
              </View>
          </View>
        </View>
      </Swipeable>
    )
  }

  public cancelNewProduct() {
      this.setState({newProduct: {id: '', name: '',  image: '', dlc: {timestamp: 0, day: 0, month: 0, year: 0, dateString: ''}}, newProductDLC: {dateString: '', day: 0, month: 0, timestamp: 0, year: 0},  isNewProduct: false})
  }

  public async addNewProduct() {
    var newProduct: Product = this.state.newProduct;
    var products: Product[] = this.state.products;
    if (this.state.newProductDLC.dateString != '') {
      newProduct.dlc = this.state.newProductDLC;
      newProduct.number = this.state.number;
      products.push(newProduct);
      await SecuredStorage.saveProductData(products);
      this.props.route.params = undefined
      await this.CheckOrderData();
      this.setState({isNewProduct: false, newProduct: {id: '', name: '',  image: '', dlc: {timestamp: 0, day: 0, month: 0, year: 0, dateString: ''}}});
    }
  }

  public render() {
    const { products, isNewProduct, number, newProductDLC } = this.state;
    LocaleConfig.locales['fr'] = {
      monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
      monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
      dayNames: ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
      dayNamesShort: ['Dim.','Lun.','Mar.','Mer.','Jeu.','Ven.','Sam.'],
      today: 'Aujourd\'hui'
    };
    LocaleConfig.defaultLocale = 'fr';
    return (
      <View style={style.container}>
        <View style={style.titleContainer}>
            <Text style={style.title}>Calendrier</Text>
        </View>
          { isNewProduct ? (
          <View style={{flex: 1}}>
            <Calendar
              minDate={this.state.date}
              onDayPress={(day) => this.setState({newProductDLC: day})}
              style={{ paddingTop: '3%', marginLeft: '5%', marginRight: '5%' }}
              hideExtraDays={true}
              firstDay={1}
              theme={{
                textDayFontSize: 12,
                'stylesheet.day.basic': {
                  base: {
                    height: 17,
                    width: 17
                  }
                },
                backgroundColor: 'transparent',
                calendarBackground: 'transparent',
                textDayFontWeight: 'bold',
                textMonthFontWeight: 'bold',
                textDayHeaderFontWeight: 'bold',
              }}
            />
            <View style={style.productContainer}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 0.7, justifyContent: 'center', alignItems: 'center'}}>
                        <Image size={100} source={{ uri: this.state.newProduct.image }} alt='imageProduct'/>
                        <Text style={{fontWeight: 'bold', fontSize: 14}}>DLC: {newProductDLC.dateString == '' ? '' : newProductDLC.day + '/' + newProductDLC.month + '/' + newProductDLC.year}</Text>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{width: '100%'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 16, textAlign: 'center'}}>{this.state.newProduct.name}</Text>
                        </View>
                        <View style={{width: "100%", height: "30%", flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <TouchableOpacity onPress={() => number != 1 ? this.setState({number: number-1}) : undefined} style={{backgroundColor: '#83bd9f', borderRadius: 10, width: 20, height: 20, justifyContent: 'center', alignItems: 'center'}}>
                              <Icon size={13} color='white' name='minus'></Icon>
                            </TouchableOpacity>
                            <Text style={{fontWeight: 'bold', fontSize: 18, marginLeft: '7%', marginRight: '7%'}}>{number}</Text>
                            <TouchableOpacity onPress={() =>  this.setState({number: number+1})} style={{backgroundColor: '#83bd9f', borderRadius: 10, width: 20, height: 20, justifyContent: 'center', alignItems: 'center'}}>
                              <Icon size={13} color='white' name='plus'></Icon>
                            </TouchableOpacity>
                        </View>
                        <View style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                            <TouchableOpacity onPress={() => this.cancelNewProduct()} style={{backgroundColor: '#d3d2d2', justifyContent: 'center', alignItems: 'center', width: 125, height: 30, borderRadius: 20}}>
                              <Text style={{fontWeight: 'bold'}}>Annuler</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{flex: 0.3, justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableOpacity onPress={() => this.addNewProduct()} style={{backgroundColor: '#83bd9f', borderRadius: 20, padding: 7, width: 200, height: 45, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>Confirmer</Text>
                  </TouchableOpacity>
                </View>
            </View>
          </View>
          ) : (
            <View style={{flex: 1}}>
              <Calendar
                minDate={this.state.date}
                onDayPress={(day) => {console.log('selected day', day)}}
                style={{ paddingTop: '3%', marginLeft: '5%', marginRight: '5%' }}
                hideExtraDays={true}
                firstDay={1}
                theme={{
                  textDayFontSize: 12,
                  'stylesheet.day.basic': {
                    base: {
                      height: 17,
                      width: 17
                    }
                  },
                  backgroundColor: 'transparent',
                  calendarBackground: 'transparent',
                  textDayFontWeight: 'bold',
                  textMonthFontWeight: 'bold',
                  textDayHeaderFontWeight: 'bold',
                }}
              />
              <View style={style.productContainer}> 
                <Text style={style.productTitle}>Vos produits</Text>
                <Text style={style.productSubtitle}>Cette semaine</Text>
                  <FlatList
                    style={{marginTop: '2%'}}
                    data={products}
                    renderItem={({item, index}) => this.renderProducts(item, index)}
                    keyExtractor={(item) => item.id}
                    nestedScrollEnabled
                  />
              </View>
            </View>
          )}
      </View>
    )
  }  
}
