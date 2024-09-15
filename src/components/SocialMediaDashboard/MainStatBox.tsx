import FacebookIcon from '/src/assets/images/icon-facebook.svg';
import TwitterIcon from '/src/assets/images/icon-twitter.svg';
import InstagramIcon from '/src/assets/images/icon-instagram.svg';
import YoutubeIcon from '/src/assets/images/icon-youtube.svg';

import IncreaseIcon from '/src/assets/images/icon-up.svg';
import DecreaseIcon from '/src/assets/images/icon-down.svg';

type MainStatBoxProps = {
    social: string;
    handle: string;
    followers: number;
    rate: number;
}

const socialMediaIcons: { [key: string]: string } = {
    facebook: FacebookIcon,
    twitter: TwitterIcon,
    instagram: InstagramIcon,
    youtube: YoutubeIcon,
};

export default function MainStatBox({social, handle, followers, rate}: MainStatBoxProps) {

    return (
        <section className={"main-stat-box main-stat-box--" + social}>
            <div className='main-stat-box__user'>
                <img className='main-stat-box__social-icon' src={socialMediaIcons[social]} alt={social + "Logo"}/>
                <p>{social === 'youtube' ? handle : '@' + handle}</p>
            </div>

            <div className='main-stat-box__follow'>
                <p className='main-stat-box__follow-count'>{followers}</p>
                <p className='main-stat-box__follow-text'>{social === 'youtube' ? 'Followers' : 'Subscribers'}</p>
            </div>
            
            <div className={'main-stat-box__rate main-stat-box__rate--' + (rate >= 0 ? 'positive' : 'negative')}>
                <img src={rate >= 0 ? IncreaseIcon : DecreaseIcon} alt="" role='presentation'/>
                <p>{Math.abs(rate)} Today</p>
            </div>
        </section>
    )
}

