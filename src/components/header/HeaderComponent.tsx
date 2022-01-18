import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import style from './HeaderComponentStyles'

export interface Props {
    title: string;
}

interface State {}

export default class HeaderComponent extends React.Component<Props, State> {
    public render() {
        const { title } = this.props;
        return (
            <View style={style.container}>
                <Text style={style.title}>{title}</Text>
            </View>
        )
    }
}