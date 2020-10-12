import React, { useState } from 'react'
import { View, Text, Animated, Button, Easing } from 'react-native'
import logo from '../images/logo-4.png'

export default function ResponseView() {
    const [location, setLocation] = useState({
        x: null,
        y: null,
        marginLeft: new Animated.Value(0),
        marginTop: new Animated.Value(0)
    });
    console.log(location)

    const onPress = (evt) => {
        const { locationX, locationY } = evt.nativeEvent
        setLocation({ ...location, x: locationX, y: locationY })
    }

    const onMove = (evt) => {
        const { locationX, locationY } = evt.nativeEvent
        const { x, y } = location;
        const marginLeft = locationX - x
        const marginTop = locationY - y
        console.log({ marginLeft, marginTop })
        setLocation({
            x, y,
            marginLeft: new Animated.Value(marginLeft),
            marginTop: new Animated.Value(marginTop)
        })
    }

    const onRelease = (evt) => {
        const anim1 = Animated.timing(
            location.marginLeft,
            {
                toValue: 0,
                duration: 500,
                easing: Easing.bounce
            }
        )
        const anim2 = Animated.timing(
            location.marginTop,
            {
                toValue: 0,
                duration: 500,
                easing: Easing.bounce
            }
        )
        Animated.parallel([anim1, anim2]).start()
    }

    const { marginLeft, marginTop } = location

    return (
        <View
            onStartShouldSetResponder={() => true}
            onMoveShouldSetResponder={() => true}
            onResponderMove={onMove}
            onResponderRelease={onRelease}
            onResponderGrant={onPress}
            style={{
                flex: 1,
                backgroundColor: "yellow",
                alignItems: "center",
                justifyContent: "center"
            }}>
            <Animated.Image source={logo}
                style={{ height: 100, width: 100, marginLeft, marginTop }} />
        </View >
    )
}
