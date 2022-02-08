import React from "react";
import { faCheckCircle, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Heading = ({ yearJoined, agentAvatar, agentName }) => {
  return (
    <div className="my-apartment-heading">
      <div className="heading-wrapper">
        <div className="header">
          <h2>My apartments</h2>
          <button className="blue-btn">List Home</button>
        </div>

        <div className="agent-details">
          <div className="agent-avatar">
            <img src={agentAvatar} alt="" />
          </div>

          <h3>
            {agentName}{" "}
            <FontAwesomeIcon className="icon" icon={faCheckCircle} />
          </h3>

          <p className="special-l">
            Agent <FontAwesomeIcon className="dot" icon={faCircle} /> Joined{" "}
            {yearJoined}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Heading;
