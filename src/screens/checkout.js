import React from "react";
import { View, StyleSheet, ScrollView, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Text from "../components/text/text";
import AppHeader from "../components/app-header";
import { useDispatch, useSelector } from "react-redux";
import { colors, spacing, typography } from "../theme";
import { Ionicons } from "@expo/vector-icons";
import Input from "../components/input";
import Checkbox from "../components/checkbox";
import { selectCart, selectTotalAmount } from "../../redux/cartSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import Summary from "../components/summary";
import Modal from 'react-native-modal'
import ConfirmationModal from "../components/confirmation-modal";
import Dropdown from "../components/dropdown";

const SHIPPING_PRICE = 50;
const VAT =500;

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required").email("Invalid email"),
  phone: Yup.string().required("Phone is required"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  zip: Yup.string().required("Zip is required")
});

export default function Checkout({ navigation }) {
  const cartItems = useSelector(selectCart);
  const totalPrice = useSelector(selectTotalAmount);
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const [openCountryDropdown, setOpenCountryDropdown] = React.useState(false);
  const [country, setCountry] = React.useState(null);
  const [countryList, setCountryList] = React.useState([
    {label: 'United State', value: 'United State'},
    {label: 'United Kingdom', value: 'United Kingdom'},
    {label: 'Bangladesh', value: 'Bangladesh'},
    {label: 'India', value: 'India'},
  ]);

  const toggleModal = () => {
      setIsModalVisible(!isModalVisible);
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      zip: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      toggleModal()
    },
  });

  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView>
        <AppHeader />
        <Pressable style={styles.backButton} onPress={() => { navigation.goBack() }}>
          <Ionicons name="chevron-back-sharp" size={20} color="black" />
          <Text preset='light' style={{color: 'black'}}>Go Back</Text>
        </Pressable>
        <View style={styles.title}>
            <Text preset="h5" uppercase>Checkout</Text>
            <Text textColor={colors.primary} uppercase style={styles.subtitle}>
                Billing details
            </Text>

            <Input
              label="Name"
              placeholder="John doe"
              onChangeText={formik.handleChange('name')}
              onBlur={formik.handleBlur('name')}
            />
            {formik.touched.name && formik.errors.name && (
              <Text preset='subtitle' style={styles.invalid}>
                {formik.errors.name}
              </Text>
            )}

            <Input
              label="Email address"
              placeholder="john@gmail.com"
              keyboard="email-address"
              onChangeText={formik.handleChange('email')}
              onBlur={formik.handleBlur('email')}
            />
            {formik.touched.email && formik.errors.email && (
              <Text preset='subtitle' style={styles.invalid}>
                {formik.errors.email}
              </Text>
            )}

            <Input
              label="Phone number"
              placeholder="+1823998213"
              keyboard="phone-pad"
              onChangeText={formik.handleChange('phone')}
              onBlur={formik.handleBlur('phone')}
            />
            {formik.touched.phone && formik.errors.phone && (
              <Text preset='subtitle' style={styles.invalid}>
                {formik.errors.phone}
              </Text>
            )}

            <Text textColor={colors.primary} uppercase style={styles.subtitle}>
                Shipping details
            </Text>

            <Input
              label="Address"
              placeholder="12 london street"
              onChangeText={formik.handleChange('address')}
              onBlur={formik.handleBlur('address')}
            />
            {formik.touched.address && formik.errors.address && (
              <Text preset='subtitle' style={styles.invalid}>
                {formik.errors.address}
              </Text>
            )}

            <Input
              label="Zip code"
              placeholder="23213"
              keyboard="numeric"
              onChangeText={formik.handleChange('zip')}
              onBlur={formik.handleBlur('zip')}
            />
            {formik.touched.zip && formik.errors.zip && (
              <Text preset='subtitle' style={styles.invalid}>
                {formik.errors.zip}
              </Text>
            )}

            <Input
              label="City"
              placeholder="London"
              onChangeText={formik.handleChange('city')}
              onBlur={formik.handleBlur('city')}
            />
            {formik.touched.city && formik.errors.city && (
              <Text preset='subtitle' style={styles.invalid}>
                {formik.errors.city}
              </Text>
            )}

            <Dropdown
              label="Country"
              open={openCountryDropdown}
              value={country}
              items={countryList}
              setOpen={setOpenCountryDropdown}
              setValue={setCountry}
              setItems={setCountryList}
            />

            <Text textColor={colors.primary} uppercase style={styles.subtitle}>
                Payment details
            </Text>
            <Checkbox text="Cash on Delivery" selected={true} />
            <Checkbox text="Online payment (coming soon)" disable={true} />
        </View>
        <Summary
          cartItems={cartItems}
          totalPrice={totalPrice}
          shippingPrice={SHIPPING_PRICE}
          vat={VAT}
          onPressPay={formik.handleSubmit}
        />
      </ScrollView>
      {
        isModalVisible && (
          <Modal isVisible={isModalVisible}>
            <ConfirmationModal
              cartItems={cartItems}
              totalPrice={totalPrice}
              shippingPrice={SHIPPING_PRICE}
              vat={VAT}
              toggleModal={toggleModal}
            />
          </Modal>
        )
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: spacing[4],
    marginLeft: spacing[5],
  },
  title: {
    paddingHorizontal: spacing[2],
    margin: spacing[5]
  },
  subtitle: {
    marginTop: spacing[4]
  },
  invalid: {
    color: 'red'
  }
});