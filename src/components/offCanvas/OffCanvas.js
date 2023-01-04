import Offcanvas from "react-bootstrap/Offcanvas";
import { useTeams } from "../../context/TeamsContext";
import "./OffCanvas.css";
export const OffCanvas = () => {
  // const { showCanvas, setShowCanvas, teamDetails } = useTeams();
  const teamsObj = useTeams();

  return (
    <>
      <Offcanvas
        show={teamsObj?.showCanvas}
        onHide={teamsObj?.setShowCanvas}
        placement={"end"}
      >
        <Offcanvas.Header closeButton className="offcanvas-header">
          <Offcanvas.Title>
            {teamsObj?.teamDetails
              ? teamsObj?.teamDetails?.home_team?.name
              : "Hawks"}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="details-container">
            <div className="details-head">
              <div className="team-row">
                <p>Team Full Name</p>
                <p>
                  {teamsObj?.teamDetails
                    ? teamsObj?.teamDetails?.home_team?.full_name
                    : "Atlanta Hawks"}
                </p>
              </div>
              <div className="team-row">
                <p>Total Games in {teamsObj?.teamDetails?.season}</p>
                <p>
                  {teamsObj?.teamDetails
                    ? teamsObj?.teamDetails?.home_team_score
                    : "88"}
                </p>
              </div>
            </div>
            <div className="details-body">
              <h6>Random Game Details:</h6>
              <div className="details">
                <div className="details-row">
                  <p>Date</p>
                  <p>
                    {teamsObj?.teamDetails
                      ? teamsObj?.teamDetails?.date?.split("T")[0]
                      : "2019-02-08"}
                  </p>
                </div>
                <div className="details-row">
                  <p>Home Team</p>
                  <p>
                    {teamsObj?.teamDetails
                      ? teamsObj?.teamDetails?.home_team?.name
                      : "Hawks"}
                  </p>
                </div>
                <div className="details-row">
                  <p>Home Team Score</p>
                  <p>
                    {teamsObj?.teamDetails
                      ? teamsObj?.teamDetails?.home_team_score
                      : "120"}
                  </p>
                </div>
                <div className="details-row">
                  <p>Visitor Team</p>
                  <p>
                    {teamsObj?.teamDetails
                      ? teamsObj?.teamDetails?.visitor_team?.name
                      : "Hornets"}
                  </p>
                </div>
                <div className="details-row">
                  <p>Visitor Team Score</p>
                  <p>
                    {teamsObj?.teamDetails
                      ? teamsObj?.teamDetails?.visitor_team_score
                      : "129"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
