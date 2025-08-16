import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/right-section/cv.css';
import { ExperiencePoint } from "./ExpPoint.jsx";
import { PracticalPoint } from './PracticalPoint.jsx';
import phoneIcon from "../../assets/icons/phone.svg";
import emailIcon from "../../assets/icons/email.svg";
import link from "../../assets/icons/link.svg";

export default function CvTemplate({ 
  data = {}, 
  expPoints = [], 
  practicalPoints = [], 
  toggleLinkedin = false 
}) {
  return (
    <div className="cv-template">
      <div className='header'>
        <div className='header-left'>
          <h1 className='name'>
            {data.fullName || "John Doe"}
          </h1>
          <p className='jobTitle'>{data.jobTitle || "Software Engineer"}</p>
          {toggleLinkedin && (
            <a className='linkedin' href={data.linkedinURL || "https://www.linkedin.com/in/john-doe"}>
              <img className='linkedinImage' src={link} alt="LinkedIn" />
              {data.linkedin || "John Doe"}
            </a>
          )}
        </div>

        <div className='header-right'>
          <p className='para'>{data.address || "USA, New York, 5th Avenue, 12"}</p>
          
          <p className='para'>
            {data.phoneNumber ? (
              <>
                <a href={`tel:${data.phoneNumber}`}>{data.phoneNumber}</a>
                <img src={phoneIcon} alt="phone icon" />
              </>
            ) : (
              <>
                <a href="tel:+1-202-555-0104">+1-202-555-0104</a>
                <img src={phoneIcon} alt="phone icon" />
              </>
            )}
          </p>

          <p className='para'>
            {data.email ? (
              <>
                <a href={`mailto:${data.email}`}>{data.email}</a>
                <img src={emailIcon} alt="email icon" />
              </>
            ) : (
              <>
                <a href="mailto:john.personal@doe.com">john.personal@doe.com</a>
                <img src={emailIcon} alt="email icon" />
              </>
            )}
          </p>
        </div>
      </div>

      {practicalPoints.length > 0 && (
        <div className='topic-exp'>
          <h1 className='exp-topic'>Work Experience</h1>
          <div className='exp-container'>
            {practicalPoints.map((practicalPoint, index) => ( 
              <div className='exps' key={practicalPoint.id || index}>
                <PracticalPoint practicalData={practicalPoint.Data || practicalPoint} />
              </div>
            ))}
          </div>
        </div>
      )}
      
      {expPoints.length > 0 && (
        <div className='topic-exp'>
          <h1 className='exp-topic'>Education</h1>
          <div className='exp-container'>
            {expPoints.map((exp, index) => ( 
              <div className='exps' key={exp.id || index}>
                <ExperiencePoint exp={exp.cardData || exp} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

CvTemplate.propTypes = {
  data: PropTypes.object,
  expPoints: PropTypes.array,
  practicalPoints: PropTypes.array,
  toggleLinkedin: PropTypes.bool,
};
