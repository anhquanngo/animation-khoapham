import React, { Component } from 'react';
import { Animated, Text, Dimensions, Image, ImageBackground } from 'react-native';


const { width, height } = Dimensions.get('window');

export default class HelloApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Animated.Value(0)
        }
    }

    componentDidMount() {
        Animated.timing(
            this.state.time,
            {
                toValue: 2,
                duration: 2000
            }
        ).start();
    }


    render() {
        const opacity = this.state.time.interpolate({
            inputRange: [0, 2],
            outputRange: [0, 1]
        })

        const marginTop = this.state.time.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [-50, 50, 30]
        })
        const marginLeft = this.state.time.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [-700, -700, 0]
        })
        return (
            <>
                <ImageBackground
                    style={{
                        width,
                        height,
                        alignItems: "center",
                    }}
                    source={image1}
                >
                    <Animated.Image
                        style={{
                            resizeMode: "center",
                            marginTop,
                            opacity
                        }}
                        source={logo}
                    />
                    <Animated.Text style={{
                        fontSize: 30,
                        backgroundColor: 'transparent',
                        marginTop: 250,
                        marginLeft,
                        color: "white"
                    }}>ReactNative</Animated.Text>
                </ImageBackground>
            </>
        );
    }
}