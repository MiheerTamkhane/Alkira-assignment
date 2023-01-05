import { filterBySearch, sortingHandler } from "../utils/filterUtils";

describe("Testing the utils functions", () => {
  test("should filter the data by given search query", () => {
    const searchQuery = "hawks";
    const originalData = [
      {
        abbreviation: "ATL",
        city: "Atlanta",
        conference: "East",
        division: "Southeast",
        full_name: "Atlanta Hawks",
        id: 1,
        name: "Hawks",
      },
      {
        abbreviation: "BOS",
        city: "Boston",
        conference: "East",
        division: "Atlantic",
        full_name: "Boston Celtics",
        id: 2,
        name: "Celtics",
      },
    ];

    const result = filterBySearch(originalData, searchQuery);

    expect(result[0]).toEqual(originalData[0]);
  });

  test("should sort(descending) the data by given sortType", () => {
    const sort = {
      sortType: "city",
      bool: false,
    };
    const originalData = [
      {
        abbreviation: "ATL",
        city: "Atlanta",
        conference: "East",
        division: "Southeast",
        full_name: "Atlanta Hawks",
        id: 1,
        name: "Hawks",
      },
      {
        abbreviation: "BOS",
        city: "Boston",
        conference: "East",
        division: "Atlantic",
        full_name: "Boston Celtics",
        id: 2,
        name: "Celtics",
      },
    ];

    const result = sortingHandler(originalData, sort);

    expect(result).toEqual([
      {
        abbreviation: "BOS",
        city: "Boston",
        conference: "East",
        division: "Atlantic",
        full_name: "Boston Celtics",
        id: 2,
        name: "Celtics",
      },
      {
        abbreviation: "ATL",
        city: "Atlanta",
        conference: "East",
        division: "Southeast",
        full_name: "Atlanta Hawks",
        id: 1,
        name: "Hawks",
      },
    ]);
  });
});
