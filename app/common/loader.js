import React from 'react';
import { View, Modal, ActivityIndicator } from 'react-native';

const Loading = ({ isActive, color }) => {
    return (
        <Modal
            animationType='fade'
            transparent
            onRequestClose={() => null}
            visible={isActive}
        >
            <View style={{ backgroundColor: 'rgba(0,0,0,0.2)', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size='large' color={color} />
            </View>
        </Modal>
    )
}

export { Loading }