import Pagination from "react-bootstrap/Pagination";
import PageItem from "react-bootstrap/PageItem";
import { useTeams } from "../../context/TeamsContext";
import "./PaginationComp.css";
export const PaginationComp = () => {
  const { searchedData, changePageHandler, data } = useTeams();
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
        {pageNumbers.map((number) => {
          return (
            <PageItem
              key={number}
              active={number === data.currentPage}
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
