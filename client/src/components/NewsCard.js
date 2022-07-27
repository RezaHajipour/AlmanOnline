import "../styles/newscard.css";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const NewsCard = () => {
    return (
        <Grid item xs={3}>
            <Paper elevation={3} square>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Si-o-se-Pol.jpg/1200px-Si-o-se-Pol.jpg"
                    className="newsImg"
                    alt="news image"
                />
                <Box paddingX={1}>
                    <Typography variant="subtitle2" component="h2">
                        Card Title
                    </Typography>
                </Box>
            </Paper>
        </Grid>
    );
};

export default NewsCard;
