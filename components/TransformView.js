import React, { Component } from 'react';
import { Animated, Easing, Text, View } from 'react-native';

export default class TransformColor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transform: new Animated.Value(0),
        }
    }

    componentDidMount() {
        const anim1 = Animated.timing(
            this.state.transform,
            {
                toValue: 1,
                duration: 1000
            }
        );
        const anim2 = Animated.timing(
            this.state.transform,
            {
                toValue: 0,
                duration: 1000
            }
        );
        const finalAnim = Animated.sequence([anim1, anim2])
        Animated.loop(finalAnim).start()
    }

    render() {
        const rotate = this.state.transform.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['15deg', '0deg', '-15deg']
        })
        return (
            < View >
                <Animated.View
                    style={{
                        height: 200,
                        width: 300,
                        transform: [{ rotate }, { rotateY: rotate }],
                        marginBottom: 20,
                        ...this.props.style,
                        // transform: [{ translateX: marginLeft1 }]
                    }}
                >
                    {this.props.children}
                </Animated.View>
            </View >
        );
    }
}