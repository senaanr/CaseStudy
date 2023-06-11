import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native'

interface ProductItemProps {
    item: {
        id: string;
        title: string;
        image: string;
        avgRating: number;
        ratings: number;
        price: number;
        oldPrice?: number;
        comments : string;
    }
}

const ProductItem = ({ item }: ProductItemProps) => {
    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate('ProductDetails', { id: item.id });
    };
    return (
        <Pressable onPress={onPress} style={styles.root}>
            <Image
                style={styles.image}
                source={{ uri: item.image }} />

            <View style={styles.rightcontainer}>
                <Text style={styles.title} numberOfLines={3}>{item.title}</Text>

                <View style={styles.ratingsContainer}>
                    {[0, 0, 0, 0, 0].map((el, i) => (
                        <FontAwesome
                            key={`${item.id}-${i}`}
                            style={styles.star}
                            name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
                            size={16}
                            color={"#e47911"} />))}

                    <Text > {item.ratings}</Text>

                    
                </View>

                <Text style={styles.price}>
                    ${item.price}
                    {item.oldPrice && (<Text style={styles.oldPrice}>${item.oldPrice}</Text>)}
                </Text>

                

            </View>

        </Pressable>
    )
}

export default ProductItem;