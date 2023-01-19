export const initialState = {
  active: "home",
  facebook: "https://www.facebook.com/",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
  linkedIn: "https://www.linkedin.com/",
  phone: `1 (216) 000-000`,
  email: "Info@FirstClass.com",
  address: "Find A Location",
  info: {
    industry: "",
    email: "",
    name: "",
    roles: [],
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACTIVE":
      return {
        ...state,
        active: action.active,
      };
    case "SET_INFO":
      return {
        ...state,
        info: action.info,
      };
    default:
      return state;
  }
};

export default reducer;
