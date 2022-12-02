import {Platform} from 'react-native'
import colors from './colors'

export default {
    text: {
        color: colors.light,
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
        // flex: 1
    }
}