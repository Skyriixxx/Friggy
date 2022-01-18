import { background } from 'native-base/lib/typescript/theme/styled-system';
import { StyleSheet } from 'react-native';

import CommonColor from '../../theme/color';

export default StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    titleContainer:  {
        flex: 0.13,
        justifyContent: 'flex-end',
        marginLeft: '5%',
        marginRight: '5%',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 32
    },
    calendarContainer: {
        backgroundColor: 'green',
        marginLeft: '5%',
        marginRight: '5%',
    },
    productContainer: {
        flex: 0.9,
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: '5%'
    },
    productTitle: {
        fontWeight: 'bold',
        fontSize: 24
    },
    productSubtitle: {
        fontWeight: 'bold',
        color: 'grey',
        opacity: 0.5
    },
    productView: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#d3d2d2',
        backgroundColor: 'white'
    },
    productImageView: {
        padding: '3%',
    },
    productNameView: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    productTommorow: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    productDate: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    swipeView: {
        flex: 0.4,
        backgroundColor: 'red',
        paddingRight: '5%',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
})
