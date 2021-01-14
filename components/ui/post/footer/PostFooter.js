import React from 'react'

import {
    FlatList,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'

import Comment from '../../comment/Comment'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
  
import {
    faComment as farComment,
    faHeart as farHeart,
    faPaperPlane as farPaperPlane
} from '@fortawesome/free-regular-svg-icons'
  
import {
    faHeart as fasHeart
} from '@fortawesome/free-solid-svg-icons'

import style from './StyleSheet'

import colors from '../../../../config/colors.json'

export default class PostFooter extends React.Component {

    state = {
        comentario  : '',
        curtido     : this.props.item.curtidoPorMim,
        showComment : false
    }

    curtir = () => {
        let curtido = ! this.state.curtido
        this.setState({ curtido })
        
        let post = this.props.item

        post.curtidoPorMim = curtido

        if ( curtido ) {
            post.likes++
        } else {
            post.likes--
        }
    }

    comentar = () => {

        if ( this.state.comentario.trim().length == 0 ) {
            alert('Informe o comentário')
            return;
        }

        this.props.onComment(this.props.item, this.state.comentario)

        this.setState({ comentario : '' })
    }

    render() {

        let iconLike  = (this.state.curtido) ? fasHeart  : farHeart
        let colorLike = (this.state.curtido) ? colors.vermelho : colors.preto

        return (
            <View>
                <View style={ style.container }>
                    <TouchableOpacity             
                        onPress={ _ => this.setState({ showComment : ! this.state.showComment }) }>

                        <FontAwesomeIcon 
                            icon={ farComment }
                            size={ 24 }
                            style={ style.iconComment } />
                    </TouchableOpacity>


                    <TouchableOpacity onPress={ _ => this.curtir() }>

                        <FontAwesomeIcon 
                            color={ colorLike }
                            icon={ iconLike }
                            size={ 24 }
                            style={ style.iconLike } />
                            
                    </TouchableOpacity>
                    
                    <Text>Curtidas: { this.props.item.likes }</Text>                
                </View>

                { this.state.showComment && (
                    <View style={ style.container }>
                        <TextInput 
                            onChangeText={ (comentario) => this.setState({ comentario }) }
                            placeholder='Digite seu comentário...'
                            style={ style.inputComment }
                            value={ this.state.comentario }/>

                        <TouchableOpacity
                            onPress={ _ => this.comentar() }>
                            <FontAwesomeIcon 
                                icon={ farPaperPlane }
                                size={ 24 } />
                        </TouchableOpacity>
                    </View>
                )}

                <FlatList 
                    data={ this.props.item.comentarios }
                    renderItem={ ({item}) => <Comment item={item} />}
                    keyExtractor={ (item) => item.id.toString() } />
            </View>
        )
    }
}