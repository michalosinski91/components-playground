const initialState = {
  contactDetails: {
    firstName: "",
    lastName: "",
    city: "",
    postCode: "",
    phone: "",
    email: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CONTACT_DETAILS":
      return {
        ...state,
        contactDetails: {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          city: action.payload.city,
          postCode: action.payload.postCode,
          phone: action.payload.phone,
          email: action.payload.email,
        },
      };
    default:
      return state;
  }
};

export default reducer;
