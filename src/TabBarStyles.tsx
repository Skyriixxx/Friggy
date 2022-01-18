import { background } from 'native-base/lib/typescript/theme/styled-system';
import { StyleSheet } from 'react-native';

import CommonColor from './theme/color';

export default StyleSheet.create ({
    tabContainer: {
        elevation: 0,
        height: '13%',
        borderTopWidth: 1,
        alignItems: 'center'
    },
    circle: {
        height: '70%',
        width: '76%',
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
