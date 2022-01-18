import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Button, FlatList, Image } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicon from 'react-native-vector-icons/Ionicons'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { BarCodeReadEvent, RNCamera } from 'react-native-camera';

import CommonColor from '../../theme/color';
import SecuredStorage from '../../utils/SecuredStorage';
import Product from '../../type/Product'
import BaseProps from '../../type/BaseProps'


interface Props extends BaseProps {
}

interface State {
    products: Product[],
    onRead: boolean,
}

export default class Camera extends React.Component<Props, State> {
    public constructor(props: Props) {
        super(props);
        this.state = {
            products: [],
            onRead: false,
        };
    }

    public async componentDidMount() {
        const products: Product[] = await SecuredStorage.getProductsData();
        this.setState({products: products});
    }

    public async readBarCodeDataAndSaveData(data: BarCodeReadEvent) {
        this.setState({onRead: true});
        try {
            const response = await fetch("https://world.openfoodfacts.org/api/v0/product/" + data.data + ".json");
            const result = await response.json();
            var productName: string;
            var productImage: string;
            var newProduct: Product

            productName = result.product.product_name == '' ? result.product.product_name_fr : result.product.product_name;
            productImage = result.product.image_url == undefined || '' ? result.product.selected_images.front.display.fr : result.product.image_url
            newProduct = ({id: new Date().getTime().toString(), name: productName, image: productImage, dlc: {timestamp: 0, day: 0, month: 0, year: 0, dateString: ''}});
            this.props.navigation.navigate('Calendar', {newProduct: newProduct});
            this.setState({onRead: false });
        } catch (error) {
            console.log('Error: ' + error);
            this.setState({onRead: false});
        }
    }  

    public render() {
        return (
            <View style={{flex: 1}}>
                {!this.state.onRead && (
                    <RNCamera
                        style={{flex: 1}}
                        type={RNCamera.Constants.Type.back}
                        onBarCodeRead={async (data) => this.readBarCodeDataAndSaveData(data)}
                        captureAudio={false}
                        androidCameraPermissionOptions={{
                            title: 'Permission to use camera',
                            message: 'We need your permission to use your camera',
                            buttonPositive: 'Ok',
                            buttonNegative: 'Cancel',
                        }}
                    />
                )}
            </View>
        )
    }
}
