import React from "react"
import { View, Image, TouchableOpacity, StyleSheet } from "react-native"
export default React.memo(function Speacker(props) {
    const { mute } = props
    return (
        <View>
            {
                mute == false ?
                <Image source={require('../config/assets/unmute.png')} style={styles.imagestyle} />
                :
                <Image source={require('../config/assets/mute.png')} style={styles.imagestyle} />
            }
        </View>
    )
})
const styles = StyleSheet.create({
    imagestyle: {
        height: 30,
        width: 30,
    }

})