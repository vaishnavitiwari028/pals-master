import React from "react";
import { useContactsState } from "../context";
import { useField, useImageUpload } from "../custom-hooks";
import countriesData from "../utils/countriesData";
import ChooseImage from "./ChooseImage";
import {
  Button,
  Clickable,
  FormHeader,
  FormInput,
  Select,
} from "./reusable-components";
import { CreateContactContainer } from "./styled-compoents";

const CreateContactForm = ({ onSubmit, editData }) => {
  const {
    addContact: { loading: addLoading },
    editContact: { loading: editLoading },
  } = useContactsState();
  const {
    tempImageURL,
    onImageChange,
    imageFile,
    imgRef,
    chooseImage,
    removeImage,
  } = useImageUpload({ initialImageUrl: editData?.contact_picture || "" });

  const {
    value: firstname,
    field: firstnameField,
    onChange: firstnameOnChange,
    meta: firstnameMeta,
  } = useField({
    initialValue: editData ? editData.first_name : "",
  });

  const {
    value: lastname,
    field: lastnameField,
    onChange: lastnameOnChange,
    meta: lastnameMeta,
  } = useField({ initialValue: editData ? editData.last_name : "" });

  const {
    value: phoneNumber,
    field: phoneNumberField,
    onChange: phoneNumberOnChange,
    meta: phoneNumberMeta,
  } = useField({
    validateFn: (val) => {
      for (let char of val + "") {
        if ("1234567890".includes(char) === false)
          return "phone number should only contain 0-9 digits";
      }
      return val.length < 10 ? "at least 10 char needed" : "";
    },
    initialValue: editData ? editData.phone_number : "",
  });

  const {
    value: countryCode,
    field: countryCodeField,
    onChange: countryCodeOnChange,
    meta: countryCodeMeta,
  } = useField({
    initialValue: editData ? editData.country_code : "",
  });
  const {
    value: isFavorite,
    field: addToFavouritesField,
    onChange: addToFavouritesOnChange,
  } = useField({
    initialValue:
      editData && editData.is_favorite ? editData.is_favorite : false,
  });

  const countriesOptions = countriesData.map(({ text, value }) => {
    return { text, value };
  });

  const editCountryCode = () =>
    editData
      ? countriesOptions.find(
          (country) => country.value === editData.country_code
        ).text
      : "---Choose---";

  const allValid =
    firstnameMeta.isValid &&
    lastnameMeta.isValid &&
    phoneNumberMeta.isValid &&
    countryCodeMeta.isValid;

  const isEditInValid =
    editData?.first_name === firstname &&
    editData?.last_name === lastname &&
    editData?.phone_number === phoneNumber &&
    editData?.country_code === countryCode &&
    editData?.is_favorite === isFavorite &&
    editData?.contact_picture === tempImageURL;

  return (
    <>
      <FormHeader mt="2rem">
        {editData ? (
          <>
            Edit Contact
            <Clickable
              className="put_at_end"
              width="20px"
              icon="trash"
              to={`/delete/${editData.id}`}
            />
          </>
        ) : (
          "Create New Contact"
        )}
      </FormHeader>
      <CreateContactContainer
        onSubmit={(e) =>
          onSubmit(e)({
            ...firstnameField,
            ...lastnameField,
            ...phoneNumberField,
            ...countryCodeField,
            ...addToFavouritesField,
            contact_picture: imageFile,
          })
        }
      >
        <div>
          <FormInput
            type="file"
            ref={imgRef}
            onChange={onImageChange}
            name="contact_picture"
            hidden
          />
          <ChooseImage
            tempImageURL={tempImageURL}
            alt="img"
            chooseImage={chooseImage}
            removeImage={removeImage}
          />
        </div>

        <FormInput
          label="First Name"
          name="first_name"
          onChange={firstnameOnChange}
          error={firstnameMeta.error}
          value={firstname}
        />
        <FormInput
          label="Last Name"
          onChange={lastnameOnChange}
          name="last_name"
          error={lastnameMeta.error}
          value={lastname}
        />
        <Select
          label="Country Code"
          onChange={countryCodeOnChange}
          name="country_code"
          options={countriesOptions}
          display="---Choose---"
          error={countryCodeMeta.error}
          editValue={editCountryCode()}
        />
        <FormInput
          label="Phone Number"
          onChange={phoneNumberOnChange}
          name="phone_number"
          error={phoneNumberMeta.error}
          value={phoneNumber}
        />
        <FormInput
          label="Add To Favourites"
          onChange={addToFavouritesOnChange}
          type="checkbox"
          name="is_favorite"
          checked={!!isFavorite}
          id="add_to_favorites"
        />
        {editData ? (
          <Button disabled={editLoading || isEditInValid || !allValid}>
            {editLoading ? "Saving..." : "Save"}
          </Button>
        ) : (
          <Button disabled={addLoading || !allValid}>
            {addLoading ? "Adding..." : "Add"}
          </Button>
        )}
      </CreateContactContainer>
    </>
  );
};

export default CreateContactForm;
