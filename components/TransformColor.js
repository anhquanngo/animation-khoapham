import React, { Component } from 'react';
import { Animated, Easing, Text, View } from 'react-native';

export default class TransformColor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorAnim: new Animated.Value(0),
        }
    }

    componentDidMount() {
        const anim1 = Animated.timing(
            this.state.colorAnim,
            {
                toValue: 1,
                duration: 1000
            }
        );
        const anim2 = Animated.timing(
            this.state.colorAnim,
            {
                toValue: 0,
                duration: 1000
            }
        );
        const finalAnim = Animated.sequence([anim1, anim2])
        Animated.loop(finalAnim).start()
    }

    render() {
        const backgroundColor = this.state.colorAnim.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['green', 'red', 'yellow']
        })
        return (
            < View >
                <Animated.View
                    style={{
                        width: 300,
                        height: 200,
                        backgroundColor,
                        marginBottom: 20,
                        // transform: [{ translateX: marginLeft1 }]
                    }}
                >
                    {this.props.children}
                </Animated.View>
            </View >
        );
    }
}