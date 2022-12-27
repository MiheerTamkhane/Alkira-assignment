import { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { useTeams } from "../context/TeamsContext";
import { PaginationComp } from "./PaginationComp";
import "./TeamsTable.css";
export const TeamsTable = () => {
  const { teams, currentTeams, showCanvas, setShowCanvas } = useTeams();
  return (
    <div>
      <Table striped hover borderless className="table">
        <thead className="table-head">
          <tr>
            <th>Team Name</th>
            <th>City</th>
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
                className="table-row"
                onClick={() => {
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
      <PaginationComp />
    </div>
  );
};
