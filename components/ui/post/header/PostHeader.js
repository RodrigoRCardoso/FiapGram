import React from 'react'

import {
    Image,
    Text,
    View
} from 'react-native'

import style from './StyleSheet'

export default class PostHeader extends React.Component {
    render() {
        return (
            <View style={ style.container }>
                <Image 
                  source={{ uri : this.props.item.user.img }}
                  style={ style.imagem }/>

                <Text style={ style.texto }>
                    { this.props.item.user.nome }
                </Text>
            </View>
        )
    }
}