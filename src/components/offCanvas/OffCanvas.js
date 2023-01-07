import Offcanvas from "react-bootstrap/Offcanvas";
import { useTeams } from "../../context/TeamsContext";
import "./OffCanvas.css";
export const OffCanvas = () => {
  const { showCanvas, setShowCanvas, teamDetails } = useTeams();
  return (
    <>
      <Offcanvas show={showCanvas} onHide={setShowCanvas} placement={"end"}>
        <Offcanvas.Header closeButton className="offcanvas-header">
          <Offcanvas.Title>
            {teamDetails ? teamDetails?.name : "Hawks"}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="details-container">
            <div className="details-head">
              <div className="team-row">
                <p>Team Full Name</p>
                <p>{teamDetails ? teamDetails?.full_name : "Hawks"}</p>
              </div>
              <div className="team-row">
                <p>Total Games in {teamDetails?.season}</p>
                <p>{"88"}</p>
              </div>
            </div>
            <div className="details-body">
              <h6>Random Game Details:</h6>
              <div className="details">
                <div className="details-row">
                  <p>Date</p>
                  <p>{"2019-02-08"}</p>
                </div>
                <div className="details-row">
                  <p>Home Team</p>
                  <p>{teamDetails ? teamDetails?.name : "Hawks"}</p>
                </div>
                <div className="details-row">
                  <p>Home Team Score</p>
                  <p>{"120"}</p>
                </div>
                <div className="details-row">
                  <p>Visitor Team</p>
                  <p>{"Hornets"}</p>
                </div>
                <div className="details-row">
                  <p>Visitor Team Score</p>
                  <p>{"129"}</p>
                </div>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
