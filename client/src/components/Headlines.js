import { useState, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "@mui/material/Link";

const Headlines = () => {
    const [headlines, setHeadlines] = useState([]);

    // useEffect(() => {
    //     fetch("/api/headlines").then((res) =>
    //         res.json().then((data) => setHeadlines(data))
    //     );
    // });

    useEffect(() => {
        fetch("/api/headlines", {})
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if (data.error_message) {
                    console.log(data.error_message);
                    history.replaceState("/");
                    return;
                }
                setHeadlines(data);
            });
    }, []);

    return (
        <div>
            {!headlines ? (
                <p>loading...</p>
            ) : (
                headlines.map((headline) => (
                    <Grid item key={headline.id}>
                        <Link
                            component="button"
                            variant="body2"
                            underline="none"
                            onClick={() => {
                                console.info("I'm a button.");
                            }}
                            sx={{
                                textdecoration: "none",
                                color: "#151922",
                                mb: 1,
                            }}
                        >
                            <p className="headline">{headline.title}</p>
                        </Link>
                    </Grid>
                ))
            )}
        </div>
    );
};
export default Headlines;
