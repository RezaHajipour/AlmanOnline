import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import NewsCard from "./NewsCard";
const Home = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </Grid>
        </Container>
    );
};

export default Home;
