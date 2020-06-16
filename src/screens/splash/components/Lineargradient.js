import React from 'react'
import {Dimensions} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const W = Dimensions.get('window').width

const Lineargradient = ({style}) => {
    return (
        <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={[{height:2 * W},style]}
        colors={['#00d2ff', '#3a7bd5']}>    
        </LinearGradient>
    );
}

export default Lineargradient
