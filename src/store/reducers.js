const initialState = {
  contactDetails: {
    firstName: "",
    lastName: "",
    city: "",
    postCode: "",
    phone: "",
    email: "",
  },
  topStrengths: [],
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
    case "SET_TOP_STRENGTHS":
      return {
        ...state,
        topStrengths: [...action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
