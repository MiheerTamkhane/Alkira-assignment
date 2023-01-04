export function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: action.payload };
    case "SEARCH":
      return { ...state, query: action.payload };
    case "SORT":
      return { ...state, sort: action.payload };
    case "CURR_PAGE":
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
}
export const initialState = {
  isLoading: true,
  currentPage: 1,
  teamsPerPage: 10,
  query: "",
  sort: { sortType: "city", bool: true },
};
