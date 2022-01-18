import React from 'react';
import { ScrollView, View,  } from 'react-native';
import { Button, Text, Image } from 'native-base'

import CommonColor from '../../theme/color';
import BaseProps from '../../type/BaseProps'
import style from './HomeStyle';


interface Props extends BaseProps {}

interface State {}

export default class Home extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <View style={style.container}>
        <ScrollView>
            <Image style={{width: "100%", height: 700}} source={require("../../assets/image/home.png")} alt="image"></Image>
        </ScrollView>
      </View>
    )
  }  
}