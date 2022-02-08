import React from "react";
import { Link } from "react-router-dom";

const SearchLinks = () => {
  return (
    <section className="search-links">
      <nav>
        <div className="cntr">
          <h3 className="heading">Pebbles signature</h3>
          <p>
            Pebbles signature is a platform to ease access to getting service
            apartments.
          </p>
        </div>
        <div className="cntr">
          <h3 className="heading">Popular apartments</h3>
          <ul>
            <li>
              <Link>3 Bedroom Flat at Bariga</Link>
            </li>
            <li>
              <Link>Self contained at Omole</Link>
            </li>
            <li>
              <Link>3 Duplex at Aguda</Link>
            </li>
            <li>
              <Link>2 Bedroom Flat at Surulere</Link>
            </li>
            <li>
              <Link>Ensuite 3 Bedroom at Ikeja</Link>
            </li>
          </ul>
        </div>
        <div className="cntr">
          <h3 className="heading">Popular Areas</h3>
          <ul>
            <li>
              <Link>Ikeja(230)</Link>
            </li>
            <li>
              <Link>Lekki (140)</Link>
            </li>
            <li>
              <Link>Yaba (223)</Link>
            </li>
            <li>
              <Link>Surulere (822)</Link>
            </li>
            <li>
              <Link>Ketu (182)</Link>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default SearchLinks;
