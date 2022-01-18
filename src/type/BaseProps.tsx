
import { NavigationProp, ParamListBase } from '@react-navigation/core';

export default interface BaseProps {
    navigation: NavigationProp<ParamListBase>
    route?: any;
}