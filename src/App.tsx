import {SocialMediaDataEntry} from './types';
import Header from "./components/Header/Header.tsx";
import SocialMediaDashboard from "./components/SocialMediaDashboard/SocialMediaDashboard.tsx";
import SocialMediaData from "./data/data.json"
import {useState} from "react";

type SocialMediaData = SocialMediaDataEntry[];

export default function App() {
    const [theme, setTheme] = useState('light');

    function handleToggleTheme() {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    }

    return (
        <div className={theme}>
            <Header onToggle={handleToggleTheme} />
            <main className="section-grid">
                <SocialMediaDashboard data={SocialMediaData}/>
            </main>
        </div>
    )
}
