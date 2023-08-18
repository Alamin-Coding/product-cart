import { Container } from "react-bootstrap";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  const errorStyle = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  }

  return (
    <Container style={errorStyle} id="error-page">
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to={"/"} className="btn btn-primary">Back To Home</Link>
      </div>
    </Container>
  );
}
