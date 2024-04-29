import React, { useEffect } from "react";
import { useContactsDispatch } from "../context";
import { searchContactsAction } from "../context/actions";
import { useField } from "../custom-hooks";
import { SearchContainer, SearchInput, SearchLabel } from "./styled-compoents";
const SearchField = () => {
  const { value: searchedText, onChange } = useField();
  const contactsDispatch = useContactsDispatch();

  useEffect(() => {
    searchContactsAction(searchedText.replaceAll(" ", ""), contactsDispatch);
  }, [searchedText]);

  return (
    <SearchContainer>
      <SearchLabel htmlFor="search_contact">
        <i className="fas fa-search fa-xs"></i>
      </SearchLabel>
      <SearchInput id="search_contact" onChange={onChange} />
    </SearchContainer>
  );
};

export default SearchField;
