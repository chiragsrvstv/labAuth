import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FormDisplay = (props) => {
    const labsAccessed = props.volunteerData.labsAccessed;
    console.log(props.volunteerData.length);
    
    return (
        <View>
            <Text>
                tree
            </Text>
        </View>
    )
}

export default FormDisplay

const styles = StyleSheet.create({})
