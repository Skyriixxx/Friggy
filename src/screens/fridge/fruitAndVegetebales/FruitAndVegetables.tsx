import React from 'react';
import { View, TouchableOpacity, ScrollView, Text } from 'react-native';
import { Image } from 'native-base'
import Ionicon from 'react-native-vector-icons/Ionicons';

import CommonColor from '../../../theme/color';
import BaseProps from '../../../type/BaseProps'
import style from './FruitAndVegetablesStyles';
import { background } from 'native-base/lib/typescript/theme/styled-system';


interface Props extends BaseProps {}

interface State {}

export default class FruitAndVegetables extends React.Component<Props, State> {
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
              <Image style={{position: 'absolute', width: 200, height: 210, bottom: "76%", left: '25.5%'}} source={require("../../../assets/image/vegetables_bag.png")} alt="image"/>
              <View style={{flex: 1, marginTop: "25%", marginRight: '4%', marginLeft: '4%'}}>
                    <Text style={style.title}>Pourquoi est-il recommandé de manger de saison ?</Text>
                    <View style={{justifyContent: 'center', alignItems: 'center', height: '18%'}}>
                        <TouchableOpacity style={{backgroundColor: '#83bd9f', width: "70%", height: "65%", justifyContent: 'center', alignItems: 'center', borderRadius: 15}}>
                            <Text style={{color: 'white'}}>Calendrier</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView>
                        <Text style={style.h1}>#1. C’est meilleur pour la santé</Text>
                        <Text style={style.text}>
                            Les fruits et légumes de saison sont plus riches en nutriments, et donc plus intéressants pour notre santé. Cela pour plusieurs raisons.
                            Tout d’abord, les aliments de saison ont pour avantage d’être cultivés dans des conditions climatiques qui leur sont propres, ce qui permet le développement optimal de leurs nutriments.{`\n`}
                        </Text>
                        <Text style={style.text}>
                            De plus, ils ont pour avantage de ne pas être cueillis avant maturité, contrairement aux fruits et légumes hors saison qui sont en général cueillis précocement. Or, les polyphénols, sucres et autres composés réputés bénéfiques pour la santé se forment au cours de la maturation.
                            On peut donc facilement imaginer que les fruits et légumes de saison sont donc plus riches sur le plan nutritionnel.{`\n`}
                        </Text>
                        <Text style={style.text}>
                            Enfin, les fruits et légumes cultivés dans leur pleine saison contiennent en théorie moins de pesticides et d’engrais chimiques du fait qu’ils n’ont pas besoin d’être aidés pour croître dans leurs conditions climatiques naturelles.
                        </Text>
                        <Text style={style.h1}>#2. Les aliments de saison ont plus de goût</Text>
                        <Text style={style.text}>
                            Les fruits et légumes de saison sont plus savoureux que ceux cultivés hors saison, car ils permettent de jouir de conditions climatiques optimales pour leur développement.
                            Exemple : les fruits et légumes d’été (comme la tomate) ont besoin de suffisamment de soleil pour mûrir. Les cultiver en hiver avec un taux d’ensoleillement moindre et des températures moins chaudes les rendent moins savoureux et moins nutritifs.
                            Vous l’avez certainement déjà constaté par vous-même. {`\n\n`}
                            Manger de saison permet également de favoriser les productions locales, et donc d’éviter les durées de transports trop longues qui poussent les producteurs à cueillir les aliments avant maturation.
                            Or, le fait d’éviter la cueillette des fruits avant la maturation résulte en des fruits et légumes plus riches en nutriments et surtout en composés aromatiques (autrement dit, plus savoureux).
                        </Text>
                        <Text style={style.h1}>#3. Ils répondent à nos besoins nutritionnels</Text>
                        <Text style={style.text}>
                            La nature est bien faite. En effet, on observe facilement que les fruits et légumes de saison ont tendance à répondre à nos besoins qui évoluent au fil des saisons:{`\n`}
                        </Text>
                        <Text style={style.textBackSpace}>
                            Vous constaterez que l’hiver, les aliments de saison sont souvent sources de glucides (pommes de terre, …) qui permettent d’apporter davantage d’énergie et de nous réchauffer (par leurs modes de préparation qui nécessitent une cuisson).
                            Les aliments d’hiver sont souvent plus riches en vitamine C pour stimuler nos défenses immunitaires très sollicitées à cette période de l’année (kiwi, oranges…).{`\n\n`}
                            À l’inverse, l’été, les fruits et légumes de saison sont naturellement plus riches en eau, pour pallier au risque de déshydratation liée à la hausse des températures (melon, pastèque, tomates, courgettes….).
                        </Text>
                        <Text style={style.h1}>#5. C’est bon pour la planète !</Text>
                        <Text style={style.text}>
                            Autres bienfaits des fruits et légumes de saison que nous avons pu aborder rapidement dans les points précédents : manger de saison est bon pour l’environnement ! Fraises, cerises, tomates, concombres et autres légumes vendus en hiver sont soit importés de pays chauds, soit cultivés dans des serres chauffées.
                            Dans les deux cas, cela augmente les rejets de gaz à effet de serre nocifs pour notre planète.{`\n\n`}
                            Manger de saison permet ainsi d’éviter de faire venir des aliments de loin, et donc de limiter l’impact négatif du transport sur l’environnement.
                            Selon l’Agence de l’environnement et de la maîtrise de l’énergie (Ademe) : Consommer des fraises d’Espagne en mars a un impact sur l’environnement 3,5 fois plus important que consommer des fraises produites en France en juin.{`\n\n`}
                            Manger de saison permet également de limiter la culture en serre des fruits/légumes d’été, ce qui limite le chauffage et donc l’utilisation d’énergie massive.
                            Une tomate cultivée sous serre chauffée émet 8 fois plus de gaz à effet de serre qu’une tomate produite en extérieur en pleine saison, selon les études de l’Ademe.
                            (Un avantage des serres néanmoins ? Elles nécessitent moins de terre et de pesticides.
                            Une solution simple serait de se tourner vers les serres naturellement chauffées par le soleil ou chauffées aux énergies renouvelables).
                        </Text>
                        <Text style={style.h1}>#6 C’est bon pour le porte-feuille</Text>
                        <Text style={style.text}>
                            Enfin, dernier avantage mais pas des moindres : les produits de saison ont tendance à être moins chers.
                            Moins coûteux à produire et à acheminer (puisqu’il n’y a pas de coûts de transports exorbitants), ils sont ainsi vendus moins cher ! De quoi alléger considérablement notre portefeuille !{`\n\n`}
                            Consommer des fruits et légumes de saison et locaux est donc bénéfique pour notre santé et pour l’environnement.
                            Rappelons que manger des fruits et légumes de saison ne revient pas forcément plus cher.
                            Les fruits et légumes produits hors saison ont un coût de transports et de production plus élevé, ce qui se répercute sur nos tickets de caisse….
                            Voilà une raison supplémentaire de privilégier davantage les produits de saison au quotidien{`\n\n`}
                        </Text>
                </ScrollView>
              </View>
          </View>
      </View>
    )
  }  
}
