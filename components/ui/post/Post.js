import React from 'react'

import {
    Image,
    Text,
    View
} from 'react-native'

import PostHeader from './header/PostHeader'

import PostFooter from './footer/PostFooter'

import style from './StyleSheet'

export default class Post extends React.Component {
    render() {
        return (
            <View style={ style.container }> 
               
                <PostHeader item={ this.props.item } />

                <Image 
                    source={ { uri : this.props.item.img} }
                    style={ style.imagem } />

                <Text style={ style.descricao }>
                    { this.props.item.descricao }
                </Text>

                <PostFooter 
                    item={ this.props.item }
                    onComment={ this.props.onComment } />
            </View>
        )
    }
}