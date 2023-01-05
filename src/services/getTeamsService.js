import axios from "axios";

export const getTeamsService = async () => {
  try {
    const response = await axios.get("https://www.balldontlie.io/api/v1/teams");

    return response.data;
  } catch (err) {
    console.error(err);
    return err;
  }
};
