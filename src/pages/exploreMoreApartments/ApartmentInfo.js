import React from 'react';
import avatar from '../../img/avatar.png';
import dash from './apartments.module.css';
import image1 from '../../img/apartment.png';
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ApartmentInfo = () => {
  return (
    <div className={dash.wrapper}>
      <div className={dash.pageHeading}>
        <h2>Check out our apartments</h2>
      </div>
      <div className={dash.container}>
        <div className={dash.card}>
          <div className={dash.img}>
            <img src={image1} alt="" />
          </div>
          <div className={dash.body}>
            <p className={dash.title}>Revolution plus</p>
            <p className={dash.price}>$20,000</p>

            <div className={dash.details}>
              <div className={dash.amenities}>
                <span>3 bedrooms</span>
                <FontAwesomeIcon className={dash.dot} icon={faCircle} />
                <span>3 toilets</span>
                <FontAwesomeIcon className={dash.dot} icon={faCircle} />
                <span>3 parlors</span>
              </div>
              <div className={dash.owner}>
                <img className={dash.avatar} src={avatar} alt="" />
                <div className="owner-details">
                  <p className={dash.name}>Akin Sam</p>
                  <p className={dash.location}>Yaba, Lagos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={dash.card}>
          <div className={dash.img}>
            <img src={image1} alt="" />
          </div>
          <div className={dash.body}>
            <p className={dash.title}>Revolution plus</p>
            <p className={dash.price}>$20,000</p>

            <div className={dash.details}>
              <div className={dash.amenities}>
              <span>3 bedrooms</span>
                <FontAwesomeIcon className={dash.dot} icon={faCircle} />
                <span>3 toilets</span>
                <FontAwesomeIcon className={dash.dot} icon={faCircle} />
                <span>3 parlors</span>
              </div>
              <div className={dash.owner}>
                <img className={dash.avatar} src={avatar} alt="" />
                <div className="owner-details">
                  <p className={dash.name}>Akin Sam</p>
                  <p className={dash.location}>Yaba, Lagos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={dash.card}>
          <div className={dash.img}>
            <img src={image1} alt="" />
          </div>
          <div className={dash.body}>
            <p className={dash.title}>Revolution plus</p>
            <p className={dash.price}>$20,000</p>

            <div className={dash.details}>
              <div className={dash.amenities}>
              <span>3 bedrooms</span>
                <FontAwesomeIcon className={dash.dot} icon={faCircle} />
                <span>3 toilets</span>
                <FontAwesomeIcon className={dash.dot} icon={faCircle} />
                <span>3 parlors</span>
              </div>
              <div className={dash.owner}>
                <img className={dash.avatar} src={avatar} alt="" />
                <div className="owner-details">
                  <p className={dash.name}>Akin Sam</p>
                  <p className={dash.location}>Yaba, Lagos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={dash.card}>
          <div className={dash.img}>
            <img src={image1} alt="" />
          </div>
          <div className={dash.body}>
            <p className={dash.title}>Revolution plus</p>
            <p className={dash.price}>$20,000</p>

            <div className={dash.details}>
              <div className={dash.amenities}>
              <span>3 bedrooms</span>
                <FontAwesomeIcon className={dash.dot} icon={faCircle} />
                <span>3 toilets</span>
                <FontAwesomeIcon className={dash.dot} icon={faCircle} />
                <span>3 parlors</span>
              </div>
              <div className={dash.owner}>
                <img className={dash.avatar} src={avatar} alt="" />
                <div className="owner-details">
                  <p className={dash.name}>Akin Sam</p>
                  <p className={dash.location}>Yaba, Lagos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={dash.card}>
          <div className={dash.img}>
            <img src={image1} alt="" />
          </div>
          <div className={dash.body}>
            <p className={dash.title}>Revolution plus</p>
            <p className={dash.price}>$20,000</p>

            <div className={dash.details}>
              <div className={dash.amenities}>
              <span>3 bedrooms</span>
                <FontAwesomeIcon className={dash.dot} icon={faCircle} />
                <span>3 toilets</span>
                <FontAwesomeIcon className={dash.dot} icon={faCircle} />
                <span>3 parlors</span>
              </div>
              <div className={dash.owner}>
                <img className={dash.avatar} src={avatar} alt="" />
                <div className="owner-details">
                  <p className={dash.name}>Akin Sam</p>
                  <p className={dash.location}>Yaba, Lagos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={dash.card}>
          <div className={dash.img}>
            <img src={image1} alt="" />
          </div>
          <div className={dash.body}>
            <p className={dash.title}>Revolution plus</p>
            <p className={dash.price}>$20,000</p>

            <div className={dash.details}>
              <div className={dash.amenities}>
              <span>3 bedrooms</span>
                <FontAwesomeIcon className={dash.dot} icon={faCircle} />
                <span>3 toilets</span>
                <FontAwesomeIcon className={dash.dot} icon={faCircle} />
                <span>3 parlors</span>
              </div>
              <div className={dash.owner}>
                <img className={dash.avatar} src={avatar} alt="" />
                <div className="owner-details">
                  <p className={dash.name}>Akin Sam</p>
                  <p className={dash.location}>Yaba, Lagos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={dash.card}>
          <div className={dash.img}>
            <img src={image1} alt="" />
          </div>
          <div className={dash.body}>
            <p className={dash.title}>Revolution plus</p>
            <p className={dash.price}>$20,000</p>

            <div className={dash.details}>
              <div className={dash.amenities}>
              <span>3 bedrooms</span>
                <FontAwesomeIcon className={dash.dot} icon={faCircle} />
                <span>3 toilets</span>
                <FontAwesomeIcon className={dash.dot} icon={faCircle} />
                <span>3 parlors</span>
              </div>
              <div className={dash.owner}>
                <img className={dash.avatar} src={avatar} alt="" />
                <div className="owner-details">
                  <p className={dash.name}>Akin Sam</p>
                  <p className={dash.location}>Yaba, Lagos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={dash.card}>
          <div className={dash.img}>
            <img src={image1} alt="" />
          </div>
          <div className={dash.body}>
            <p className={dash.title}>Revolution plus</p>
            <p className={dash.price}>$20,000</p>

            <div className={dash.details}>
              <div className={dash.amenities}>
              <span>3 bedrooms</span>
                <FontAwesomeIcon className={dash.dot} icon={faCircle} />
                <span>3 toilets</span>
                <FontAwesomeIcon className={dash.dot} icon={faCircle} />
                <span>3 parlors</span>
              </div>
              <div className={dash.owner}>
                <img className={dash.avatar} src={avatar} alt="" />
                <div className="owner-details">
                  <p className={dash.name}>Akin Sam</p>
                  <p className={dash.location}>Yaba, Lagos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={dash.card}>
          <div className={dash.img}>
            <img src={image1} alt="" />
          </div>
          <div className={dash.body}>
            <p className={dash.title}>Revolution plus</p>
            <p className={dash.price}>$20,000</p>

            <div className={dash.details}>
              <div className={dash.amenities}>
              <span>3 bedrooms</span>
                <FontAwesomeIcon className={dash.dot} icon={faCircle} />
                <span>3 toilets</span>
                <FontAwesomeIcon className={dash.dot} icon={faCircle} />
                <span>3 parlors</span>
              </div>
              <div className={dash.owner}>
                <img className={dash.avatar} src={avatar} alt="" />
                <div className="owner-details">
                  <p className={dash.name}>Akin Sam</p>
                  <p className={dash.location}>Yaba, Lagos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={dash.card}>
          <div className={dash.img}>
            <img src={image1} alt="" />
          </div>
          <div className={dash.body}>
            <p className={dash.title}>Revolution plus</p>
            <p className={dash.price}>$20,000</p>

            <div className={dash.details}>
              <div className={dash.amenities}>
              <span>3 bedrooms</span>
                <FontAwesomeIcon className={dash.dot} icon={faCircle} />
                <span>3 toilets</span>
                <FontAwesomeIcon className={dash.dot} icon={faCircle} />
                <span>3 parlors</span>
              </div>
              <div className={dash.owner}>
                <img className={dash.avatar} src={avatar} alt="" />
                <div className="owner-details">
                  <p className={dash.name}>Akin Sam</p>
                  <p className={dash.location}>Yaba, Lagos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={dash.card}>
          <div className={dash.img}>
            <img src={image1} alt="" />
          </div>
          <div className={dash.body}>
            <p className={dash.title}>Revolution plus</p>
            <p className={dash.price}>$20,000</p>

            <div className={dash.details}>
              <div className={dash.amenities}>
              <span>3 bedrooms</span>
                <FontAwesomeIcon className={dash.dot} icon={faCircle} />
                <span>3 toilets</span>
                <FontAwesomeIcon className={dash.dot} icon={faCircle} />
                <span>3 parlors</span>
              </div>
              <div className={dash.owner}>
                <img className={dash.avatar} src={avatar} alt="" />
                <div className="owner-details">
                  <p className={dash.name}>Akin Sam</p>
                  <p className={dash.location}>Yaba, Lagos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={dash.card}>
          <div className={dash.img}>
            <img src={image1} alt="" />
          </div>
          <div className={dash.body}>
            <p className={dash.title}>Revolution plus</p>
            <p className={dash.price}>$20,000</p>

            <div className={dash.details}>
              <div className={dash.amenities}>
              <span>3 bedrooms</span>
                <FontAwesomeIcon className={dash.dot} icon={faCircle} />
                <span>3 toilets</span>
                <FontAwesomeIcon className={dash.dot} icon={faCircle} />
                <span>3 parlors</span>
              </div>
              <div className={dash.owner}>
                <img className={dash.avatar} src={avatar} alt="" />
                <div className="owner-details">
                  <p className={dash.name}>Akin Sam</p>
                  <p className={dash.location}>Yaba, Lagos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentInfo;
