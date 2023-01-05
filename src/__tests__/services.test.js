import { getGamesService, getTeamsService } from "../services";
import axios from "axios";

jest.mock("axios");

describe("Testing async functions", () => {
  test("should return teams data when API call is successful", async () => {
    axios.get.mockResolvedValue({ data: [{ name: "Hawks", city: "Atlanta" }] });

    const team = await getTeamsService();

    expect(team).toEqual([{ name: "Hawks", city: "Atlanta" }]);
  });

  test("should return games data when API call is successful", async () => {
    axios.get.mockResolvedValue({
      data: [
        {
          homeTeam: "Hawks",
          visitTeam: "Boston",
        },
      ],
    });

    const game = await getGamesService();

    expect(game).toEqual([
      {
        homeTeam: "Hawks",
        visitTeam: "Boston",
      },
    ]);
  });
});
