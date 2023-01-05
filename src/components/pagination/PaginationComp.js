import Pagination from "react-bootstrap/Pagination";
import PageItem from "react-bootstrap/PageItem";
import { useTeams } from "../../context/TeamsContext";
import "./PaginationComp.css";
export const PaginationComp = () => {
  const { searchedData, dispatchData, data } = useTeams();

  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(searchedData?.length / data?.teamsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-container">
      <Pagination size="sm">
        <div className="select-container">
          <span>Show</span>
          <select
            name="select-page"
            id="select-page"
            className="select-page"
            onClick={(e) => {
              dispatchData({ type: "CURR_PAGE", payload: 1 });
              dispatchData({ type: "TEAMS_PER_PAGE", payload: e.target.value });
            }}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
          <span>entries</span>
        </div>
        <span
          className={`${data.currentPage === 1 ? "fade" : "arrow"}`}
          onClick={() => {
            dispatchData({
              type: "CURR_PAGE",
              payload: data.currentPage > 1 ? data.currentPage - 1 : 1,
            });
          }}
        >
          {"<"}
        </span>
        {pageNumbers.map((number) => {
          return (
            <PageItem
              key={number}
              active={number === data.currentPage}
              onClick={() => {
                dispatchData({
                  type: "CURR_PAGE",
                  payload: number,
                });
              }}
            >
              {number}
            </PageItem>
          );
        })}
        <span
          className={`${
            data.currentPage === pageNumbers.length ? "fade" : "arrow"
          }`}
          onClick={() => {
            dispatchData({
              type: "CURR_PAGE",
              payload:
                data.currentPage < pageNumbers.length
                  ? data.currentPage + 1
                  : pageNumbers.length,
            });
          }}
        >
          {">"}
        </span>
      </Pagination>
    </div>
  );
};
