import {
  useContext,
  useState,
  useEffect,
  createContext,
  useReducer,
} from "react";
import axios from "axios";
import { filterBySearch, sortingHandler } from "../utils/filterUtils";
import { debounce } from "../utils/debouce";

const TeamsContext = createContext();
const teamsURL = "https://www.balldontlie.io/api/v1/teams";
const gamesURL = "https://www.balldontlie.io/api/v1/games/";

function reducer(state, action) {
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

const TeamsProvider = ({ children }) => {
  const [teams, setTeams] = useState([]);
  const [games, setGames] = useState([]);
  const [data, dispatchData] = useReducer(reducer, {
    isLoading: true,
    currentPage: 1,
    teamsPerPage: 10,
    query: "",
    sort: null,
  });
  const [showCanvas, setShowCanvas] = useState(false);
  const [teamDetails, setTeamDetails] = useState({});
  const [selectedTeam, setSelectedTeam] = useState(null);
  const sortedData = sortingHandler(teams, data.sort);
  const searchedData = filterBySearch(sortedData, data?.query);
  const indexOfLastPost = data.currentPage * data.teamsPerPage;
  const indexOfFirstPost = indexOfLastPost - data.teamsPerPage;
  const currentTeams = searchedData?.slice(indexOfFirstPost, indexOfLastPost);
  console.log(currentTeams);
  useEffect(() => {
    (async () => {
      await axios
        .get(teamsURL)
        .then((res) => res.data)
        .then((result) => {
          setTeams(result.data);
          dispatchData({ type: "LOADING", payload: false });
        });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await axios
        .get(gamesURL)
        .then((res) => res.data)
        .then((result) => {
          setGames(result.data);
        });
    })();
  }, []);

  useEffect(() => {
    setTeamDetails(games.find((game) => game.home_team.id === selectedTeam));
  }, [selectedTeam, games]);

  function changePageHandler(pageNum) {
    dispatchData({ type: "CURR_PAGE", payload: pageNum });
  }

  return (
    <TeamsContext.Provider
      value={{
        teams,
        showCanvas,
        setShowCanvas,
        currentTeams,
        changePageHandler,
        dispatchData,
        data,
        searchedData,
        selectedTeam,
        setSelectedTeam,
        teamDetails,
      }}
    >
      {children}
    </TeamsContext.Provider>
  );
};

const useTeams = () => {
  const context = useContext(TeamsContext);
  if (context === undefined) Error("TeamsContext error!");

  return context;
};

export { TeamsProvider, useTeams };
