import React, { Component } from 'react';
import { Animated, Easing, Text, View } from 'react-native';

export default class FadeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideAnim1: new Animated.Value(-700),
            slideAnim2: new Animated.Value(-700)
        }
    }

    componentDidMount() {
        const anim1 = Animated.timing(
            this.state.slideAnim1,
            {
                toValue: 0,
                duration: 1000,
                easing: Easing.ease
            }
        );
        const anim2 = Animated.timing(
            this.state.slideAnim2,
            {
                toValue: 0,
                duration: 1000,
                easing: Easing.ease
            }
        );
        Animated.parallel([anim1, anim2]).start();
    }

    render() {
        const marginLeft1 = this.state.slideAnim1;
        const marginLeft2 = this.state.slideAnim2;
        return (
            <View>
                <Animated.View
                    style={{
                        width: 300,
                        height: 200,
                        backgroundColor: 'green',
                        marginBottom: 20,
                        marginLeft: marginLeft1
                        // transform: [{ translateX: marginLeft1 }]
                    }}
                >
                    <Text>Hello</Text>
                </Animated.View>
                <Animated.View
                    style={{
                        width: 300,
                        height: 200,
                        backgroundColor: 'green',
                        marginLeft: marginLeft2
                        // transform: [{ translateX: marginLeft2 }]
                    }}
                >
                    <Text>Hello</Text>
                </Animated.View>
            </View>
        );
    }
}