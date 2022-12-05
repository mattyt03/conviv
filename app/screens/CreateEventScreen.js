import React from "react";
import { ScrollView, StyleSheet, View} from "react-native";
import * as Yup from "yup";

// add host
// widen description
// style the modal
// have a start and end date

import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as FormPicker,
  FormImagePicker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  date: Yup.string().required().min(1).max(10000).label("Date"),
  location: Yup.string().required().min(1).max(10000).label("Location"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  image: Yup.string().required().nullable().label("Image"),
});

const categories = [
  { label: "Party", value: 1 },
  { label: "Social", value: 2 },
  { label: "Food", value: 3 },
  { label: "Performance", value: 4 },
  { label: "Sports", value: 5 },
  { label: "Fundraiser", value: 6 },
];

export default function PartyEditScreen() {
  return (
    <Screen style={styles.container}>
      <ScrollView>
        <Form
          initialValues={{
            title: "",
            price: "",
            date: "",
            location: "",
            description: "",
            category: null,
            image: null,
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <View style={styles.formImagePickerContainer}>
            <FormImagePicker name="image" />
          </View>
          <FormField 
              maxLength={255} 
              name="title" 
              placeholder="Title" 
          />
          <FormField
              maxLength={255}
              multiline
              name="description"
              numberOfLines={3}
              placeholder="Description"
              width='100%'
          />
          <View style={styles.dateAndPrice}>
            <FormField
                keyboardType="numeric"
                maxLength={8}
                name="price"
                numberOfLines={1}
                placeholder="Price"
                width={120}
            />
            <FormField
                maxLength={255}
                name="date"
                numberOfLines={1}
                placeholder="Date"
                width={200}
            />
          </View>
          <FormField
              maxLength={255}
              multiline
              name="location"
              numberOfLines={1}
              placeholder="Location"
              width='100%'
          />
          <FormPicker 
              items={categories} 
              name="category" 
              placeholder="Category" 
              width='100%'
          />
          <SubmitButton title="Post"/>
        </Form>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 0,
    // justifyContent: 'center'
  },
  dateAndPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignContent: 'center',
  },
  formImagePickerContainer: {
    alignItems: 'center'
  },
});