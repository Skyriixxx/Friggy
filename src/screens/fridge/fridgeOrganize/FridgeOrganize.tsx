import React from 'react';
import { View, TouchableOpacity, ScrollView, Text } from 'react-native';
import { Image } from 'native-base'
import Ionicon from 'react-native-vector-icons/Ionicons';

import CommonColor from '../../../theme/color';
import BaseProps from '../../../type/BaseProps'
import style from './FridgeOrganizeStyles';
import { background } from 'native-base/lib/typescript/theme/styled-system';


interface Props extends BaseProps {}

interface State {}

export default class FridgeOrganize extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  public render() {
    return (
      <View style={style.container}>
          <View style={style.header}>
              <TouchableOpacity style={style.buttonBack} onPress={() => this.props.navigation.goBack()}>
                  <Ionicon name='md-arrow-back' size={25} color={'black'}/>
              </TouchableOpacity>
          </View>
          <View style={style.body}>
              <Image style={{position: 'absolute', width: 300, height: 210, bottom: "76%", left: '13.4%'}} source={require("../../../assets/image/bag.png")} alt="image"/>
              <View style={{flex: 1, marginTop: "25%", marginRight: '4%', marginLeft: '4%'}}>
                  <Text style={style.title}>Comment bien ranger son frigo ?</Text>
                  <ScrollView>
                    <Text style={style.h1}>Entre 0°C et 3°C : la zone froide, soit tout en haut ou tout en bas</Text>
                    <Text style={style.text}>
                        {`Viandes et poissons crus, laitages ouverts, charcuterie, fruits de mer et crustacés, fromages frais, produits en décongélation, jus de fruits frais.`}
                    </Text>
                    <Text style={style.text}>
                        {`\nLaissez toujours refroidir les restes d’un plat cuisiné avant de les mettre au frigo. Et mettez-les dans des boîtes en plastique qui ferment.`}
                    </Text>
                    <Text style={style.h1}>Entre 4°C et 6°C : la zone fraîche, le milieu du réfrigérateur</Text>
                    <Text style={style.text}>
                        {`Viandes et poissons cuits, laitages non ouverts (fromages, yaourts, crème fraîche), fruits et légumes cuits.`}
                    </Text>
                    <Text style={style.text}>
                        {`\nPour conserver le fromage, un morceau de sucre dans la boite et hop !`}
                    </Text>
                    <Text style={style.text}>
                        {`\nPour les viandes, poissons et fromages qui seraient sur une assiettes, enveloppez-les de film alimentaire.`}
                    </Text>
                    <Text style={style.text}>
                        {`\nPour les charcuteries et pâtisseries, mettez les dans du papier alu.`}
                    </Text>
                    <Text style={style.h1}>Entre 8°C et 10°C : le bac à légumes, donc en bas du réfrigérateur</Text>
                    <Text style={style.text}>
                        {`Fruits et légumes frais, sortis de leur emballage. (perso je mets un tapis en éponge qui se vend en supermarché, pratique car je peux le laver)`}
                    </Text>
                    <Text style={style.text}>
                        {`\nLes champignons se conservent dans un sac en papier ou du papier absorbant. Pas dans un sac plastique !`}
                    </Text>
                    <Text style={style.text}>
                        {`\nLa salade se conserve très bien, une fois lavée et essorée, dans un sac plastique`}
                    </Text>
                    <Text style={style.h1}>Entre 6°C et 8°C : la porte, zone tempérée</Text>
                    <Text style={style.text}>
                        {`Beurre, œufs, condiments (cornichons), sauces en pot (ketchup, moutarde), boissons (eau, jus de fruits, lait).`}
                    </Text>
                    <Text style={style.text}>
                        {`\nLes œufs dans leur emballage d’origine et ne les rincez jamais.\n\n`}
                    </Text>
              </ScrollView>
              </View>
          </View>
      </View>
    )
  }  
}
