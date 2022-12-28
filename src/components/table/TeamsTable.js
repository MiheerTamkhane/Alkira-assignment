import { Table } from "react-bootstrap";
import { useTeams } from "../../context/TeamsContext";
import { PaginationComp } from "../pagination/PaginationComp";
import "./TeamsTable.css";
export const TeamsTable = () => {
  const {
    currentTeams,
    showCanvas,
    setShowCanvas,
    dispatchData,
    data,
    selectedTeam,
    setSelectedTeam,
  } = useTeams();

  return (
    <div>
      {data?.isLoading ? (
        <div className="loader-container">
          <h3>Loading...</h3>
        </div>
      ) : (
        <Table responsive hover borderless className="table">
          <thead className="table-head">
            <tr>
              <th>Team Name</th>
              <th
                className="city-col"
                onClick={() =>
                  dispatchData({
                    type: "SORT",
                    payload: !data.sort,
                  })
                }
              >
                <span>City</span>
                <span>
                  <svg
                    style={{ transform: `rotate(${data.sort ? 180 : 0}deg)` }}
                    width="12"
                    height="6"
                    viewBox="0 0 18 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.25 9.5L9 0.75L17.75 9.5H0.25Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </th>
              <th>Abbreviation</th>
              <th>Conference</th>
              <th>Division</th>
            </tr>
          </thead>

          <tbody className="table-body">
            {currentTeams?.map((item) => {
              return (
                <tr
                  key={item.id}
                  className={`table-row ${
                    item.id === selectedTeam && showCanvas ? "bg-blue" : ""
                  }`}
                  onClick={(e) => {
                    setSelectedTeam(item.id);
                    setShowCanvas(!showCanvas);
                  }}
                >
                  <td>{item.name}</td>
                  <td>{item.city}</td>
                  <td>{item.abbreviation}</td>
                  <td>{item.conference}</td>
                  <td>{item.division}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}

      <PaginationComp />
    </div>
  );
};
