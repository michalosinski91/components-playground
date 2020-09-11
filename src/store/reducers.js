const initialState = {
  contactDetails: {
    firstName: "test",
    lastName: "",
    city: "",
    postCode: "",
    phone: "",
    email: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
