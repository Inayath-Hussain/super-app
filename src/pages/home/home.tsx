import ProfileCard from "@/components/profileCard/profileCard";
import "./home.scss";
import Weather from "@/components/weather/weather";
import News from "@/components/news/news";
import Notes from "@/components/notes/notes";

const HomePage = () => {

    return (
        <main className="home-layout">
            <ProfileCard />
            <Notes />
            <News />
            <Weather />
            <div style={{ gridArea: 'timer', background: 'green' }}>timer</div>
            <div style={{ gridArea: 'button', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <button style={{ padding: '0.75rem 1.5rem' }}>Browse</button>
            </div>
        </main>
    );
}

export default HomePage;