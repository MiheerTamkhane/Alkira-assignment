import Offcanvas from "react-bootstrap/Offcanvas";
import { useTeams } from "../context/TeamsContext";
export const OffCanvas = () => {
  const { showCanvas, setShowCanvas } = useTeams();
  return (
    <>
      <Offcanvas show={showCanvas} onHide={setShowCanvas} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
