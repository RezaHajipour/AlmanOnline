import "../styles/Home.css";
import LastNews from "./news/LastNews";
import Headlines from "./news/Headlines";
import LastVideos from "./videos/LastVideos";
// const JDate = require("jalali-date");

const Home = () => {
    // const jdate = new JDate();
    // <p className="date">{jdate.format("dddd DD MMMM YYYY")}</p>;
    return (
        <div className="HomeContainer">
            <section className="headContainer">
                <div className="headRight">
                    <h2 className="headTitle">آخرین خبر</h2>

                    <LastNews />
                </div>
                <div className="headMiddle">
                    <h2 className="headTitle"> سر خط خبرها</h2>
                    <Headlines />
                </div>
                <div className="headLeft">
                    <h2 className="headTitle"> گزیده ها</h2>
                </div>
            </section>

            <section className="lastVideoSec">
                <h2 className="headTitle"> آخرین ویدیوها</h2>
                <LastVideos />
            </section>
            <section className="generalInfoSec">
                <h2 className="headTitle">اصلاعات عمومی آلمان</h2>
            </section>
        </div>
    );
};

export default Home;
