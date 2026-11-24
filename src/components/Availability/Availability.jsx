import { Button } from "react-bootstrap";

const Availability = ({ url }) => {
  const iframeStyle = {
    border: 0,
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    minWidth: "100%",
    minHeight: "100%",
    background: "white",
  };

  return (
    <div style={{ width: "100%", height: "100%", position: "relative", paddingTop: "50px" }}>
      <div style={{ position: "absolute", top: 10, left: 10, zIndex: 1000 }}>
        <Button href="/" variant="link" active>
          Home
        </Button>
      </div>
      <iframe src={url} style={iframeStyle}></iframe>
    </div>
  );
};

export default Availability;
