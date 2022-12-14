import React, { useState } from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import ImageInputList from "../ImageInputList";
import ImageInput from "../ImageInput";

export default function FormImagePicker({name}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUri = values[name];

  const onChangeImage = (uri) => {
    setFieldValue(name, uri);
  };

  return (
    <>
      <ImageInput
        imageUri={imageUri}
        onChangeImage={onChangeImage}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}