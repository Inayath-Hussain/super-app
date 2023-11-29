import ProfileCard from "@/components/profileCard/profileCard";
import "./home.scss";

const HomePage = () => {

    return (
        <main className="home-layout">
            <ProfileCard />
            <div style={{ gridArea: 'notes', background: 'orange' }}>Notes</div>
            <div style={{ gridArea: 'news', background: 'aliceblue' }}>NEWS</div>
            <div style={{ gridArea: 'weather', background: 'purple' }}>Weather</div>
            <div style={{ gridArea: 'timer', background: 'green' }}>timer</div>
            <div style={{ gridArea: 'button', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <button style={{ padding: '0.75rem 1.5rem' }}>Browse</button>
            </div>
        </main>
    );
}

export default HomePage;