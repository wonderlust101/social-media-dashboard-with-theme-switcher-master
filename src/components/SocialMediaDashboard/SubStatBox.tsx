import FacebookIcon from '/src/assets/images/icon-facebook.svg';
import TwitterIcon from '/src/assets/images/icon-twitter.svg';
import InstagramIcon from '/src/assets/images/icon-instagram.svg';
import YoutubeIcon from '/src/assets/images/icon-youtube.svg';

import IncreaseIcon from '/src/assets/images/icon-up.svg';
import DecreaseIcon from '/src/assets/images/icon-down.svg';

type SubStatBoxProps = {
    social: string;
    label: string;
    amount: number;
    rate: number;
}

const socialMediaIcons: { [key: string]: string } = {
    facebook: FacebookIcon,
    twitter: TwitterIcon,
    instagram: InstagramIcon,
    youtube: YoutubeIcon,
};

export default function SubStatBox({social, label, amount, rate}: SubStatBoxProps) {
    
    return (
        <section className="sub-stat-box">
            <section className="sub-stat-box__row">
                <h3>{label}</h3>
                <img src={socialMediaIcons[social]} alt={social + "Logo"}/>
            </section>

            <div className='sub-stat-box__row'>
                <p className='sub-stat-box__value'>{amount}</p>
                <div className={'sub-stat-box__rate sub-stat-box__rate--' + (rate >= 0 ? 'positive' : 'negative')}>
                    <img src={rate >= 0 ? IncreaseIcon : DecreaseIcon} alt="" role="presentation"/>
                    <p>{Math.abs(rate)}%</p>
                </div>
            </div>
        </section>
    )
}

