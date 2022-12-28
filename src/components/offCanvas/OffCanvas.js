import Offcanvas from "react-bootstrap/Offcanvas";
import { useTeams } from "../../context/TeamsContext";
import "./OffCanvas.css";
export const OffCanvas = () => {
  const { showCanvas, setShowCanvas, teamDetails } = useTeams();
  return (
    <>
      <Offcanvas show={showCanvas} onHide={setShowCanvas} placement={"end"}>
        <Offcanvas.Header closeButton className="offcanvas-header">
          <Offcanvas.Title>{teamDetails?.home_team?.name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="details-container">
            <div className="details-head">
              <div className="team-row">
                <p>Team Full Name</p>
                <p>{teamDetails?.home_team?.full_name}</p>
              </div>
              <div className="team-row">
                <p>Total Games in {teamDetails?.season}</p>
                <p>{teamDetails?.home_team_score}</p>
              </div>
            </div>
            <div className="details-body">
              <h6>Random Game Details:</h6>
              <div className="details">
                <div className="details-row">
                  <p>Date</p>
                  <p>{teamDetails?.date?.split("T")[0]}</p>
                </div>
                <div className="details-row">
                  <p>Home Team</p>
                  <p>{teamDetails?.home_team?.name}</p>
                </div>
                <div className="details-row">
                  <p>Home Team Score</p>
                  <p>{teamDetails?.home_team_score}</p>
                </div>
                <div className="details-row">
                  <p>Visitor Team</p>
                  <p>{teamDetails?.visitor_team?.name}</p>
                </div>
                <div className="details-row">
                  <p>Visitor Team Score</p>
                  <p>{teamDetails?.visitor_team_score}</p>
                </div>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
