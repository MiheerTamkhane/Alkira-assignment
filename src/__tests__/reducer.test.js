import { reducer, initialState } from "../reducer/reducer";

describe("Testing reducer function", () => {
  test("should stop loading when data is fetched", () => {
    const action = {
      type: "LOADING",
      payload: false,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual({
      isLoading: false,
      currentPage: 1,
      teamsPerPage: 10,
      query: "",
      sort: { sortType: "city", bool: true },
    });
  });

  test("should filter the data when seach query added", () => {
    const action = {
      type: "SEARCH",
      payload: "bulls",
    };

    const state = reducer(initialState, action);

    expect(state).toEqual({
      isLoading: true,
      currentPage: 1,
      teamsPerPage: 10,
      query: "bulls",
      sort: { sortType: "city", bool: true },
    });
  });

  test("should sort the data by sortType in state", () => {
    const action = {
      type: "SORT",
      payload: { sortType: "name", bool: true },
    };

    const state = reducer(initialState, action);

    expect(state).toEqual({
      isLoading: true,
      currentPage: 1,
      teamsPerPage: 10,
      query: "",
      sort: { sortType: "name", bool: true },
    });
  });

  test("should change the value of current page", () => {
    const action = {
      type: "CURR_PAGE",
      payload: 2,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual({
      isLoading: true,
      currentPage: 2,
      teamsPerPage: 10,
      query: "",
      sort: { sortType: "city", bool: true },
    });
  });

  test("should change the value of results showing per page", () => {
    const action = {
      type: "TEAMS_PER_PAGE",
      payload: 20,
    };

    const state = reducer(initialState, action);

    expect(state).toEqual({
      isLoading: true,
      currentPage: 1,
      teamsPerPage: 20,
      query: "",
      sort: { sortType: "city", bool: true },
    });
  });
});
