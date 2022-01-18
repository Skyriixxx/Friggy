import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text, Image, Center } from 'native-base'

import CommonColor from '../../theme/color';
import BaseProps from '../../type/BaseProps'
import style from './FridgeStyles';


interface Props extends BaseProps {}

interface State {}

export default class Fridge extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <View style={style.container}>
            <View style={style.imageContainer}>
                <Image style={{width: 170, height: 200, marginRight: 18}} source={require("../../assets/image/friggy.png")} size={170} alt="image"/> 
            </View>
            <View style={{flex: 1.2, justifyContent: "center", alignItems: 'center', marginBottom: '6%'}}>
              <View style={style.buttonContainer}>
                  <TouchableOpacity style={style.buttons} onPress={() => this.props.navigation.navigate("Products")}>
                      <Text style={style.textButton}>Mes produits</Text>
                  </TouchableOpacity>
              </View>
              <View style={style.buttonContainer}>
                  <TouchableOpacity style={style.buttons}  onPress={() => this.props.navigation.navigate("FruitAndVegetables")}>
                      <Text style={style.textButton}>Fruits et légumes de saison</Text>
                  </TouchableOpacity>
              </View>
              <View style={style.buttonContainer}>
                  <TouchableOpacity style={style.buttons} onPress={() => this.props.navigation.navigate("FridgeOrganize")}>
                      <Text style={style.textButton}>Ranger mon frigo</Text>
                  </TouchableOpacity>
              </View>
              <View style={style.buttonContainer}>
                  <TouchableOpacity style={style.buttons}>
                      <Text style={style.textButton}>Autres Astuces</Text>
                  </TouchableOpacity>
              </View>
            </View>
      </View>
    )
  }  
}
