import { View, StyleSheet, FlatList, Text } from 'react-native'
import React from 'react';
import CartProductItem from '../../components/CartProductItem';
import products from '../../data/cart';

const ShoppingCartScreen = () => {

    const totalPrice = products.reduce((summedPrice, product) =>
        (summedPrice + product.item.price * product.quantity), 0)
    return (
        <View style={styles.page}>

            <FlatList
                data={products}
                renderItem={({ item }) => <CartProductItem cartItem={item} />}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => (
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                            Total({products.length} items): {' '}
                            <Text style={{ color: '#o47911', fontWeight: 'bold' }}>
                                ${totalPrice.toFixed(2)}
                            </Text>
                        </Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: 20
    },

})

export default ShoppingCartScreen;