import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DateTimePicker, {
    Event as DatePickerEvent,
} from '@react-native-community/datetimepicker';

import styles from './styles';
import { QuantitySelector } from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

interface Comment {
    id: number;
    text: string;
}

interface Product {
    id: string;
    title: string;
    price: number;
    oldPrice?: number;
    description: string;
    images: string[];
    avgRating: number;
    comments: Comment[];
}
type RootStackParamList = {
    ProductDetails: { product: Product };
    // Other screens and their respective params
};

// ...

type ProductDetailsRouteProps = RouteProp<RootStackParamList, 'ProductDetails'>;
type ProductDetailsNavigationProps = StackNavigationProp<RootStackParamList, 'ProductDetails'>;

interface ProductDetailsScreenProps {
    route: ProductDetailsRouteProps;
    navigation: ProductDetailsNavigationProps;
}

const ProductScreen: React.FC = () => {
    const [quantity, setQuantity] = useState<number>(1);
    const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
    const [arrivalDate, setArrivalDate] = useState<Date>(new Date());
    const route = useRoute<RouteProp<ProductDetailsRouteParams, 'product'>>();

    const { product } = route.params
    const handleDateChange = (
        event: DatePickerEvent,
        selectedDate?: Date | undefined
    ) => {
        const currentDate = selectedDate || arrivalDate;
        setShowDatePicker(false);
        setArrivalDate(currentDate);
    };

    const showDatepicker = () => {
        setShowDatePicker(true);
    };

    return (
        <ScrollView style={styles.root}>
            <Text style={styles.title}>{product.title}</Text>

            <ImageCarousel images={product.images} />

            <Text style={styles.price}>
                ${product.price}
                {product.oldPrice && (
                    <Text style={styles.oldPrice}>${product.oldPrice}</Text>
                )}
            </Text>

            <Text style={styles.description}>{product.description}</Text>

            <View>
                <Text style={{
                    fontSize: 20,
                    fontStyle: 'normal',
                    fontWeight: 'bold',
                    margin: 15,
                    marginBottom: 5
                }} >Comments</Text>
                <View style={styles.ratingsContainer}>
                    {[0, 0, 0, 0, 0].map((el, i) => (
                        <FontAwesome
                            key={`${product.id}-${i}`}
                            style={styles.star}
                            name={i < Math.floor(product.avgRating) ? 'star' : 'star-o'}
                            size={16}
                            color={'#e47911'}
                        />
                    ))}
                    <Text>
                        {' '}
                        ({product.comments && product.comments.length}{' '}
                        {product.comments && product.comments.length === 1
                            ? 'comment'
                            : 'comments'})
                    </Text>
                </View>
                <Text style={{
                    marginVertical: 20,
                    marginTop: 5
                }}>
                    {product.comments.map((cm, index) => (
                        <Text key={index}>
                            - {cm} {'\n'}
                        </Text>
                    ))}
                </Text>
            </View>
            <TouchableOpacity onPress={showDatepicker}>
                <Text >
                    Arrival Date: {arrivalDate.toLocaleDateString()}
                </Text>
            </TouchableOpacity>

            {showDatePicker && (
                <DateTimePicker
                    value={arrivalDate}
                    mode="date"
                    display="default"
                    onChange={handleDateChange}
                />
            )}

            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

            <Button text={'Add to Cart'} onPress={() => { }} />
            <Button
                text={'Buy Now'}
                onPress={() => {
                    console.warn('Buy now');
                }}
            />
        </ScrollView>
    );
};

export default ProductScreen;
