import React from 'react'
import danceEmoji from '../eventsInfo/images/dance-emoji.png'
import musicEmoji from '../eventsInfo/images/music-emoji.png'
import comedyEmoji from '../eventsInfo/images/comedy-emoji.png'
import gamesEmoji from '../eventsInfo/images/games-emoji.png'
import snacksEmoji from '../eventsInfo/images/snacks-emoji.png'
import securityEmoji from '../eventsInfo/images/security-emoji.png'

const SideAttraction = () => {
    return (
        <section className="events-side-attractions">
            <div className="attraction-wrapper">
                <div className="title">
                    <h2>Side Attractions</h2>
                    <p>This are the interesting activities to spice up the events</p>
                </div>

                <div className="body">
                    <figure>
                        <img src={danceEmoji} alt="dance emoji" />
                        <figcaption>Dance</figcaption>
                    </figure>

                    <figure>
                        <img src={musicEmoji} alt="headset emoji" />
                        <figcaption>Songs</figcaption>
                    </figure>

                    <figure>
                        <img src={comedyEmoji} alt="laughing emoji" />
                        <figcaption>Comedy</figcaption>
                    </figure>

                    <figure>
                        <img src={snacksEmoji} alt="popcorn emoji" />
                        <figcaption>Snacks</figcaption>
                    </figure>

                    <figure>
                        <img src={securityEmoji} alt="security emoji" />
                        <figcaption>Security</figcaption>
                    </figure>

                    <figure>
                        <img src={gamesEmoji} alt="table tennis bat and ball emoji" />
                        <figcaption>Games</figcaption>
                    </figure>
                </div>

                <p className='attractions-link'><a href="#">See all attractions</a></p>
            </div>
        </section>
    )
}

export default SideAttraction
