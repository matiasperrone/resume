export default function Availability({ url }) {

  return (<iframe src={url} style={{ border: 0, width: "100%", height: "100%", maxWidth: "100%", maxHeight: "100%", minWidth: "100%", minHeight: "100%", background: "white" }} ></iframe>);
}