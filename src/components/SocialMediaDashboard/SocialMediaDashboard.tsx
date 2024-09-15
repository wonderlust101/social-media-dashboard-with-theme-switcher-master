import {SocialMediaDataEntry} from '../../types.ts';

import MainStatBox from "./MainStatBox.tsx";
import SubStatBox from "./SubStatBox.tsx";

type SocialMediaDashboardProps = {
    data: SocialMediaDataEntry[];
}

export default function SocialMediaDashboard({data}: SocialMediaDashboardProps) {

    return (
        <div className="social-dashboard">
            <div className="social-dashboard__stat-row">
                {data.map((socialMedia, index) => (
                    <MainStatBox key={index}
                                 social={socialMedia.socialMedia}
                                 handle={socialMedia.stats.handle}
                                 followers={socialMedia.stats.followers}
                                 rate={socialMedia.stats.newFollowers}/>
                ))}
            </div>

            <section className='social-dashboard__sub-stats'>
                <h2 className='social-dashboard__sub-stats-header'>Overview - Today</h2>

                <div className="social-dashboard__stat-row">
                    {data.map((socialMedia, index) => (
                        <>
                            <SubStatBox key={index}
                                        social={socialMedia.socialMedia}
                                        label={socialMedia.socialMedia === 'twitter' ? 'retweet' : 'views'}
                                        amount={socialMedia.socialMedia === 'twitter' ? socialMedia.stats.retweet ?? 0 : socialMedia.stats.views ?? 0}
                                        rate={socialMedia.socialMedia === 'twitter' ? socialMedia.stats.retweetIncRate ?? 0 : socialMedia.stats.viewsIncRate ?? 0}/>

                            <SubStatBox key={index}
                                        social={socialMedia.socialMedia}
                                        label={'likes'}
                                        amount={socialMedia.stats.likes}
                                        rate={socialMedia.stats.likeIncRate}/>
                        </>
                    ))}
                </div>
            </section>
        </div>
    )
}