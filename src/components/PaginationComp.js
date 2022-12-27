import Pagination from "react-bootstrap/Pagination";
import PageItem from "react-bootstrap/PageItem";
import { useTeams } from "../context/TeamsContext";
import "./PaginationComp.css";
export const PaginationComp = () => {
  const { teams, teamsPerPage, currentPage, changePageHandler } = useTeams();
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(teams.length / teamsPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log(pageNumbers);
  return (
    <div className="pagination-container">
      <Pagination>
        {pageNumbers.map((number) => {
          return (
            <PageItem
              key={number}
              active={number === currentPage}
              onClick={() => {
                changePageHandler(number);
              }}
            >
              {number}
            </PageItem>
          );
        })}
      </Pagination>
    </div>
  );
};
