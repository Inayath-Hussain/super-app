import ProfileCard from "@/components/profileCard/profileCard";
import "./home.scss";
import Weather from "@/components/weather/weather";
import News from "@/components/news/news";
import Notes from "@/components/notes/notes";
import Timer from "@/components/timer/timer";
import { Link } from "react-router-dom";
import { browseRoute } from "@/route";

const HomePage = () => {

    return (
        <main className="home-layout">
            <ProfileCard />
            <Notes />
            <News />
            <Weather />
            <Timer />

            <div className="browse-button">

                <Link to={browseRoute}>
                    <button>Browse</button>
                </Link>

            </div>

        </main>
    );
}

export default HomePage;