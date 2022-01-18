import { StyleSheet } from 'react-native';
import CommonColor from '../../theme/color';

export default StyleSheet.create ({
    container: {
        flex: 0.16,
        backgroundColor: CommonColor.background,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontFamily: 'Montserrat-Bold',
        color: CommonColor.textDark,
        fontSize: 25,
    }
})
