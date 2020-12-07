import React from "react"
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from "react-native"
import { colors, fontSize } from "../config/assets/gloableconstant"
import { globalstyles } from "../config/assets/gloablestyle"

export default React.memo(function Reactanglecard(props) {
    // debugger
    const { data, navigation } = props
    return (
        <View >
            <Text style={{ fontSize: fontSize.larger, marginLeft: 20 }}>Popular Experts</Text>
            <ScrollView style={{ flexDirection: "row", marginTop: 10, paddingHorizontal: "2%", width: "95%" }}
                showsHorizontalScrollIndicator={false}
                horizontal={true}>
                {
                    data.map((item, index) =>
                        <View style={{  margin: 10 }} key={index}>
                            <TouchableOpacity style={{ alignItems: "center" }}
                                onPress={() => navigation.navigate('chatbot',{ interact: item })}
                            >
                                <Image
                                    style={styles.tinyLogo}
                                    source={{
                                        uri: item.image,
                                    }}
                                />
                                <Text>{item.name}</Text>
                            </TouchableOpacity>
                                <Text style={{width:150,textAlign:"center"}}>{item.work}</Text>
                        </View>
                    )
                }
            </ScrollView>
        </View>

    )
})

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        height: 150,
        width: 100,
    },
    logo: {
        width: 66,
        height: 58,
    },
});