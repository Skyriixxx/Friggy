import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Image } from 'native-base'

import CommonColor from '../../theme/color';
import BaseProps from '../../type/BaseProps'
import style from './RecipesStyles';


interface Props extends BaseProps {}

interface State {}

export default class Home extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <View style={style.container}>
        <ScrollView>
            <Image style={{width: "100%", height: 700}} source={require("../../assets/image/recipes.png")} alt="image"></Image>
        </ScrollView>
      </View>
    )
  }  
}
