import React, { useState } from 'react'
import { View, Animated, Easing, Dimensions } from 'react-native'
import h1 from '../images/number1.jpg'
import h2 from '../images/number2.jpg'
import h3 from '../images/number3.jpg'
import h4 from '../images/number4.jpg'
import h5 from '../images/number5.jpg'

const { width } = Dimensions.get('window')

export default function ResponseView() {
    const arrImages = [h1, h2, h3, h4, h5]
    const [location, setLocation] = useState({
        x: null,
        y: null,
        rotate: new Animated.Value(0),
        index: 0
    });

    const onPress = (evt) => {
        const { locationX, locationY } = evt.nativeEvent
        setLocation({ ...location, x: locationX, y: locationY })
    }

    const onMove = (evt) => {
        const { locationX, locationY } = evt.nativeEvent
        const { x, y } = location;
        const tyLe = new Animated.Value(1.5 * (locationX - x) / width)
        setLocation({ ...location, rotate: tyLe })
        if (1.5 * (locationX - x) / width > 1) {
            setLocation({
                ...location,
                index: (location.index + 1) % 5,
                x: locationX,
                y: locationY
            })
        }

        if (1.5 * (locationX - x) / width < -1) {
            setLocation({
                ...location,
                index: (location.index - 1 + 5) % 5,
                x: locationX,
                y: locationY
            })
        }
    }

    const onRelease = (evt) => {
        Animated.timing(
            location.rotate,
            {
                toValue: 0,
                duration: 500,
                easing: Easing.bounce
            }
        ).start();
    }

    const rotate = location.rotate.interpolate({
        inputRange: [-1, 1],
        outputRange: ['-30deg', '30deg']
    })
    const opacity = location.rotate.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: [0, 1, 0]
    })

    return (
        <View
            onStartShouldSetResponder={() => true}
            onMoveShouldSetResponder={() => true}
            onResponderMove={onMove}
            onResponderRelease={onRelease}
            onResponderGrant={onPress}
            style={{
                flex: 1,
                backgroundColor: "#FC9790",
                alignItems: "center",
                justifyContent: "center"
            }}>
            <Animated.Image source={arrImages[location.index]}
                style={{ height: 250, width: 180, opacity, transform: [{ rotate }] }}
            />
        </View >
    )
}
