import Loader from "react-loader-spinner";

function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <div>
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ekp4CEBIMMhF6CNiqAFqIwHaHa%26pid%3DApi&f=1"
          alt="logo"
          style={{ marginBottom: 10 }}
          height={200}
        />
        <Loader type="Bars" color="#3CBC28" height={60} width={60} />
      </div>
    </center>
  );
}

export default Loading;
