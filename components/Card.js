import React from 'react'
import { View, StyleSheet } from 'react-native'

const Card = props => {
    return (
        <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
    )
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',                   // iOS-specific
        shadowOffset: { width: 0, height: 2 },  // iOS-specific
        shadowRadius: 6,                        // iOS-specific
        shadowOpacity: 0.26,                    // iOS-specific
        elevation: 5,                           // android-specific
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20
    }
})

export default Card