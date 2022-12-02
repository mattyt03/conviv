import {DefaultTheme} from '@react-navigation/native'
import colors from '../config/colors'

// change the header font
export default {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.primary,
        background: colors.black
    }
}