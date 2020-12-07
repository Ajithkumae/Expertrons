import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { globalstyles } from '../config/assets/gloablestyle';
import { font, fontFamily, fontSize } from '../config/assets/gloableconstant';


const Headder = (props) => {
    const { maintitle, logo, backbtn, navigation, notifi, title, onpsress } = props
    return (
        <View style={styles.container}>
            <View style={globalstyles.flexflowrow}>
                {
                    logo &&
                    <Image source={require("../config/assets/logo.png")} style={styles.logo} />
                }
                {backbtn &&
                    <TouchableOpacity
                        style={{ marginTop: 20 }}
                        onPress={() => navigation.goBack()}
                    >
                        <Image source={require("../config/assets/back_white.png")} style={styles.backnav} />
                    </TouchableOpacity>
                }
                {
                    maintitle &&
                    <View style={{ marginTop: 10, marginLeft: 20, flex: 1 }}>
                        <Text style={{ fontFamily: fontFamily.bold }}  > Expertorns </Text>
                        <Text style={{ fontSize: fontSize.smaller }}> Inspire sucess </Text>
                    </View>
                }
                {
                    title &&
                    <Text style={{ marginTop: 20, fontFamily: fontFamily.bold, color: "white", fontSize: fontSize.larger, marginLeft: "30%" }}  > {title} </Text>
                }
                {
                    notifi &&
                    <Image source={require("../config/assets/Bell.png")} style={styles.notification} />
                }
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: "3%",
        paddingBottom: 15,
        width: "100%",
    },
    logo: {
        height: 50,
        width: 30,
        borderWidth: 1
    },
    notification: {
        marginTop: 10,
        height: 30,
        width: 30
    },
    backnav: {
        height: 30,
        width: 30
    }

})
export default Headder
