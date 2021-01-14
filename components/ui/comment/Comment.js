import React from 'react'

import {
    Text,
    View
} from 'react-native'

import style from './StyleSheet'

export default class Comment extends React.Component {
    render() {
        return (
            <View style={ style.container }>
                <Text style={ style.nome }>
                    {this.props.item.nome}: 
                </Text>
                
                <Text>{this.props.item.texto}</Text>
            </View>
        )
    }
}