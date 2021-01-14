import React from 'react'

import {
    StatusBar,
    Text,
    View
} from 'react-native'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import {
  faImage
} from '@fortawesome/free-regular-svg-icons'

import style from './StyleSheet'

import colors from '../../../config/colors.json'

import config from '../../../app.json'

export default class Toolbar extends React.Component {
    render() {
        return (
          <View style={ style.container }>
                
            <StatusBar backgroundColor={ colors.magenta } />
      
            <FontAwesomeIcon
              color={ colors.magenta }
              icon={ faImage }
              size={ 32 }
              style={ style.icone } />
    
              <Text style={ style.texto }>
                { config.displayName }
              </Text>      
          </View>
        )
    }
}