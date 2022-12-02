import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage'
import { useFormikContext } from 'formik'

export default function AppFormField({name, width, ...otherProps}) {
    const {setFieldTouched, handleChange, errors, touched} = useFormikContext();
  
    return (
        <View>
            <AppTextInput
                onBlur={() => setFieldTouched(name)}
                onChangeText={handleChange(name)}
                width={width}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </View>
  )
}

const styles = StyleSheet.create({})