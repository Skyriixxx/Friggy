import { StyleSheet } from 'react-native';

import CommonColor from '../../theme/color';

export default StyleSheet.create ({
    container: {
        flex: 1,
    },
    imageContainer: {
        flex: 1,
        width: "100%",
        justifyContent:'center',
        alignItems: 'center'
    },
    buttonContainer: {
        flex: 0.3,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttons: {
        backgroundColor: '#83bd9f',
        borderRadius: 30,
        width: "55%",
        height: "75%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold'
    }
})
