import React from 'react'
import { View, Text } from 'react-native'

export default function ConfirmationModal() {
    return (
        <View style={{
            backgroundColor: '#fff',
            padding: spacing[8],
            borderRadius: 12
        }}>
            <AnimatedLottieView 
                autoPlay
                style={{ height: 50, width: 50 }}
                source={require('../assets/images/success.json')}
            />
            <Text preset="h5" uppercase>
                Thank you
            </Text>
            <Text preset="h5" uppercase>
                for your order
            </Text>
            <Text textColor="#757575" style={{ paddingVertical: spacing[4] }}>
                You will recieve an email confirmation shortly
            </Text>

            <View style={{
                backgroundColor: colors.grey,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                paddingHorizontal: spacing[6],
                paddingVertical: spacing[4],
                borderBottomWidth: 1,
                borderBottomColor: "#979797",
            }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image 
                            style={{ height: 36, width: 36 }}
                            resizeMode="contain"
                            source={cartItems[0]?.featuredImage.source}
                        />
                        <View style={{ marginTop: spacing[2], marginLeft: spacing[4] }}>
                            <Text preset="title" >
                                {cartItems[0]?.name}
                            </Text>
                            <Text textColor="#757575">
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
                        <View style={{ marginTop: 12}}>
                            <Text>
                                and {cartItems.length - 1} more
                            </Text>
                        </View>
                    )
                }
            </View>
            
            <View
                style={{
                    paddingHorizontal: spacing[5],
                    paddingVertical: spacing[4],
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                    backgroundColor: "#000",
                }}
            >
                <Text textColor="#fafafa">GRAND TOTAL</Text>
                <Text
                    textColor="white"
                    preset="h5"
                    style={{ paddingTop: spacing[2] }}
                >{`$ ${totalPrice + SHIPPING_PRICE + VAT}`}</Text>
            </View>
            
            <Button 
                title="BACK TO HOME"
                fullWidth
                style={{ marginTop: spacing[6] }}
                onPress={() => {
                    toggleModal()
                    dispatch(reset())
                    navigation.navigate('Home')
                }}
            />
        </View>
    )
}
