import { StyleSheet } from 'react-native';

import CommonColor from '../../../theme/color';

export default StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#b8e0cb'
    },
    header: {
        flex: 0.12,
        justifyContent: 'flex-end',
    },
    body: {
        marginTop: "30%",
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    buttonBack: {
        width: "8%",
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '6%',
        borderRadius: 30,
        backgroundColor: 'white'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 28,
        marginBottom: '3%'
    },
    h1: {
        color: '#008037',
        marginTop: '5%',
        marginBottom: '5%',
        fontWeight: "bold",
        fontSize: 14
    },
    text: {
        fontSize: 12,
        marginLeft: '4%'
    }
})
