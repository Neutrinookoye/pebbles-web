import React from 'react'
import { faCheckCircle, faDotCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Heading = ({ yearJoined, location, ticket1, ticket2, eventName, agentAvatar, agentName  }) => {
    return (
        <div className="event-info-heading">
            <div className="heading-wrapper">
                <div className="event-details">
                    <h1>{eventName}</h1>

                    <div className="tags">
                        <button>{location}</button>
                        <button>{ticket1}</button>
                        <button>{ticket2}</button>
                    </div>
                </div>

                <div className="agent-details">
                    <div className="agent-avatar">
                        <img src={agentAvatar} alt="" />
                    </div>

                    <h3>{agentName} <FontAwesomeIcon icon={faCheckCircle} /></h3>

                    <p className="special-l">Agent <FontAwesomeIcon icon={faDotCircle} /> Joined {yearJoined}</p>

                    <p className="special-ls">Contact Agent</p>
                </div>
            </div>
        </div>
    )
}

export default Heading
