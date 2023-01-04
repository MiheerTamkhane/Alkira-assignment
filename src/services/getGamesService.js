import axios from "axios";

export const getGamesService = async () => {
  try {
    const response = await axios.get(
      "https://www.balldontlie.io/api/v1/games/"
    );

    return response.data;
  } catch (err) {
    console.error(err);
    return err;
  }
};
