import React from 'react'
import { View, StyleSheet, Image, Pressable } from 'react-native'
import Text from './text/text'
import AnimatedLottieView from 'lottie-react-native'
import { colors, spacing } from '../theme'
import { useDispatch } from "react-redux";
import { reset } from "../../redux/cartSlice";
import { useNavigation } from "@react-navigation/native";

export default function ConfirmationModal({ cartItems, totalPrice, shippingPrice, vat, toggleModal }) {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const onPressDone = () => {
        toggleModal()
        dispatch(reset())
        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <AnimatedLottieView 
                autoPlay
                style={styles.animation}
                source={require('../../assets/images/success.json')}
            />
            <Text preset="h5" uppercase>Thank you</Text>
            <Text preset="h5" uppercase>for your order</Text>
            <Text textColor={colors.darkGrey} style={styles.notification}>
                You will recieve an email confirmation shortly
            </Text>

            <View style={styles.itemBox}>
                <View style={styles.firstItemBox}>
                    <View style={styles.itemDetails}>
                        <Image 
                            style={styles.productImage}
                            resizeMode="contain"
                            source={cartItems[0]?.featuredImage.source}
                        />
                        <View style={styles.productTitle}>
                            <Text preset="title" >
                                {cartItems[0]?.name}
                            </Text>
                            <Text textColor={colors.darkGrey}>
                                ${cartItems[0]?.quantityPrice}
                            </Text>
                        </View>
                    </View>
                   
                    <Text>
                        x{cartItems[0]?.amount}
                    </Text>
                </View>
                {
                    cartItems.length > 1 && (
                        <View style={styles.moreItems}>
                            <View style={styles.horizontalBar}></View>
                            <Text>
                                and {cartItems.length - 1} more item(s)
                            </Text>
                        </View>
                    )
                }
            </View>
            
            <View style={styles.totalPriceBox}>
                <Text textColor="white">GRAND TOTAL</Text>
                <Text
                    textColor="white"
                    preset="h5"
                    style={styles.totalPrice}
                >
                    {`$ ${totalPrice + shippingPrice + vat}`}
                </Text>
            </View>
            
            <Pressable style={styles.button} onPress={onPressDone}>
                <Text uppercase white>Back to Home</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        padding: spacing[8],
        borderRadius: spacing[3],
    },
    animation: {
        height: 50,
        width: 50
    },
    notification: {
        paddingVertical: spacing[4]
    },
    itemBox: {
        backgroundColor: colors.grey,
        borderTopLeftRadius: spacing[3],
        borderTopRightRadius: spacing[3],
        paddingHorizontal: spacing[6],
        paddingVertical: spacing[4]
    },
    firstItemBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    itemDetails: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    productImage: {
        height: 36,
        width: 36
    },
    productTitle: {
        marginLeft: spacing[6]
    },
    moreItems: {
        marginTop: spacing[3],
        alignItems: 'center'
    },
    horizontalBar: {
        width: '100%',
        borderBottomWidth: .5,
        borderBottomColor: colors.darkGrey,
        marginBottom: spacing[3]
    },
    totalPriceBox: {
        paddingHorizontal: spacing[5],
        paddingVertical: spacing[4],
        borderBottomLeftRadius: spacing[3],
        borderBottomRightRadius: spacing[3],
        backgroundColor: colors.black,
    },
    totalPrice: {
        paddingTop: spacing[2]
    },
    button: {
        marginTop: spacing[4],
        paddingVertical: spacing[3],
        paddingHorizontal: spacing[5],
        backgroundColor: colors.primary,
        alignItems: "center"
    }
  });
