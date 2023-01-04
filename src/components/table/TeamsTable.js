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
              <th
                className="table-row-head"
                onClick={() =>
                  dispatchData({
                    type: "SORT",
                    payload: {
                      sortType: "name",
                      bool:
                        data.sort.sortType === "name" ? !data.sort.bool : true,
                    },
                  })
                }
              >
                <span>Team Name</span>
                <span>
                  <svg
                    style={{
                      transform:
                        data.sort?.sortType === "name" && data.sort?.bool
                          ? `rotate(0deg)`
                          : `rotate(180deg)`,
                    }}
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
              <th
                className="table-row-head"
                onClick={() =>
                  dispatchData({
                    type: "SORT",
                    payload: {
                      sortType: "city",
                      bool:
                        data.sort.sortType === "city" ? !data.sort.bool : true,
                    },
                  })
                }
              >
                <span>City</span>
                <span>
                  <svg
                    style={{
                      transform:
                        data.sort?.sortType === "city" && data.sort?.bool
                          ? `rotate(0deg)`
                          : `rotate(180deg)`,
                    }}
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
              <th
                className="table-row-head"
                onClick={() =>
                  dispatchData({
                    type: "SORT",
                    payload: {
                      sortType: "abbreviation",
                      bool:
                        data.sort.sortType === "abbreviation"
                          ? !data.sort.bool
                          : true,
                    },
                  })
                }
              >
                <span>Abbreviation</span>
                <span>
                  <svg
                    style={{
                      transform:
                        data.sort?.sortType === "abbreviation" &&
                        data.sort?.bool
                          ? `rotate(0deg)`
                          : `rotate(180deg)`,
                    }}
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
              <th
                className="table-row-head"
                onClick={() =>
                  dispatchData({
                    type: "SORT",
                    payload: {
                      sortType: "conference",
                      bool:
                        data.sort.sortType === "conference"
                          ? !data.sort.bool
                          : true,
                    },
                  })
                }
              >
                <span>Conference</span>
                <span>
                  <svg
                    style={{
                      transform:
                        data.sort?.sortType === "conference" && data.sort?.bool
                          ? `rotate(0deg)`
                          : `rotate(180deg)`,
                    }}
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
              <th
                className="table-row-head"
                onClick={() =>
                  dispatchData({
                    type: "SORT",
                    payload: {
                      sortType: "division",
                      bool:
                        data.sort.sortType === "division"
                          ? !data.sort.bool
                          : true,
                    },
                  })
                }
              >
                <span>Division</span>
                <span>
                  <svg
                    style={{
                      transform:
                        data.sort?.sortType === "division" && data.sort?.bool
                          ? `rotate(0deg)`
                          : `rotate(180deg)`,
                    }}
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
                  onClick={() => {
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
