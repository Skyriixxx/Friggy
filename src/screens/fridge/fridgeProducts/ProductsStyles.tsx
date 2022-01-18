import { background } from 'native-base/lib/typescript/theme/styled-system';
import { StyleSheet } from 'react-native';

import CommonColor from '../../../theme/color';

export default StyleSheet.create ({
    container: {
        flex: 1,
    },
    header: {
        flex: 0.12,
        justifyContent: 'center',
    },
    body: {
        flex: 1,
        margin: '3%',
    },
    buttonBack: {
        width: "8%",
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '5%'
    },
    textAdvice: {
        color: "white",
        fontSize: 14,
    },
    productView: {
        flexDirection: 'row',
        backgroundColor: CommonColor.background,
        borderBottomWidth: 1,
        borderColor: '#d3d2d2'
    },
    productImageView: {
        margin: '3%'
    },
    productNameView: {
        flex: 3,
        marginTop: '5%',
        marginBottom: '3%',
    },
    productName: {
        fontSize: 17,
    },
    calendarButtonView: {
        flex: 1,
        marginTop: '3%',
        marginBottom: '3%',
        marginRight: '3%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    swipeView: {
        flex: 0.4,
        backgroundColor: 'red',
        paddingRight: '5%',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    calendarButton: {
        borderRadius: 14,
    },
    footer: {
        flex: 0.18,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    codebarButton: {
        width: 80,
        height: 80,
        borderRadius: 90,
    }
})
