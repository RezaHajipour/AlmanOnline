import "../styles/PageNotFound.css";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className="NotFound-container">
            <h1 className="errorCode">404</h1>
            <br />
            <h2 className="notfound">PageNotFound</h2>
            <br /> <br />
            <Link className="goBack" to="/">
                Go Back HOME
            </Link>
        </div>
    );
};

export default PageNotFound;
