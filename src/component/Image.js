import React from 'react';
import { Image } from 'react-native';
import { ImagePathMap } from '../assets/ImagePathMap';

const ImageView = ({ imageUri, styles }) => {
    return (
        <Image style={styles.carImage}
            source={ImagePathMap[imageUri]}
        />
    )
}
export default ImageView;