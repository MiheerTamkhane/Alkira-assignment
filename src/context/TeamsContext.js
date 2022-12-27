import { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const TeamsContext = createContext();
const URL = "https://www.balldontlie.io/api/v1/teams";
const TeamsProvider = ({ children }) => {
  const [teams, setTeams] = useState([]);
  const [showCanvas, setShowCanvas] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [teamsPerPage, setTeamsPerPage] = useState(10);

  useEffect(() => {
    (async () => {
      await axios
        .get(URL)
        .then((res) => res.data)
        .then((result) => setTeams(result.data));
    })();
  }, []);

  const indexOfLastPost = currentPage * teamsPerPage;
  const indexOfFirstPost = indexOfLastPost - teamsPerPage;
  const currentTeams = teams.slice(indexOfFirstPost, indexOfLastPost);

  function changePageHandler(pageNum) {
    setCurrentPage(pageNum);
  }
  return (
    <TeamsContext.Provider
      value={{
        teams,
        showCanvas,
        setShowCanvas,
        currentTeams,
        currentPage,
        teamsPerPage,
        changePageHandler,
      }}
    >
      {children}
    </TeamsContext.Provider>
  );
};

const useTeams = () => {
  const context = useContext(TeamsContext);
  if (context === undefined) throw new Error("TeamsContext error!");

  return context;
};

export { TeamsProvider, useTeams };
