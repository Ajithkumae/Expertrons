import React from 'react';
import { View, Modal, ActivityIndicator, StyleSheet } from 'react-native';

const Loading = ({ isActive, color }) => {
    return (
        <Modal
            animationType='fade'
            transparent
            onRequestClose={() => null}
            visible={isActive}
        >
            <View style={styles.continer}>
                <ActivityIndicator size='large' color={color} />
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    continer: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export { Loading }
