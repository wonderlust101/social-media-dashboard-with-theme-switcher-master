import React from "react";

type headerProps = {
    onToggle: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Header({onToggle}: headerProps) {
    return (
        <header className="section-grid">
            <div className="header">
                <section className="header__text">
                    <h1>Social Media Dashboard</h1>
                    <h2 className='header__sub-header'>Total Followers: 23,004</h2>
                </section>

                <hr className="header__divider"/>

                <div className="header__switch-layout">
                    <label className="header__switch-label" htmlFor="check">Dark Mode</label>
                    <div className="header__switch-container">
                        <input className="header__switch-box" 
                               type="checkbox" 
                               id="check" 
                               onChange={onToggle}/>
                        <label className="header__switch" htmlFor="check"></label>
                    </div>
                </div>
            </div>
        </header>
    )
}