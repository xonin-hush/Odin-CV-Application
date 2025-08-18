import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/right-section/cv.css';
import phoneIcon from "../../assets/icons/phone.svg";
import emailIcon from "../../assets/icons/email.svg";
import link from "../../assets/icons/link.svg";

export default function CvTemplate({ 
  data = {}, 
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

      <div className='topic-exp'>
        <h1 className='exp-topic'>Work Experience</h1>
        <div className='exp-container'>
          {data.workEntries && data.workEntries.length > 0 ? (
            data.workEntries.map((work) => (
              <div className='exps' key={work.id}>
                <div className="practical-entry">
                  <div className="exp-header">
                    <h3 className="exp-title">{work.jobTitle}</h3>
                    <span className="exp-date">
                      {work.startDate} {work.startDate && work.endDate ? '- ' : ''} {work.endDate}
                    </span>
                  </div>
                  <h4 className="exp-company">{work.company}</h4>
                  {work.responsibilities && (
                    <p className="exp-description">{work.responsibilities}</p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className='exps'>
              <div className="practical-entry">
                <div className="exp-header">
                  <h3 className="exp-title">Software Engineer</h3>
                  <span className="exp-date">2020 - Present</span>
                </div>
                <h4 className="exp-company">Tech Company</h4>
                <p className="exp-description">Developed and maintained web applications using modern technologies.</p>
              </div>
            </div>
          )}
        </div>
      </div>
      
            {(data.work_jobTitle || data.work_company) && (
        <div className='topic-exp'>
          <h1 className='exp-topic'>Work Experience</h1>
          <div className='exp-container'>
            <div className='exps'>
              <div className="work-entry">
                <div className="work-header">
                  <h3 className="work-title">{data.work_jobTitle || "Software Engineer"}</h3>
                  <span className="work-date">
                    {data.work_startDate} {data.work_startDate && data.work_endDate ? '- ' : ''} {data.work_endDate}
                  </span>
                </div>
                <h4 className="work-company">{data.work_company || "Company Name"}</h4>
                {data.work_responsibilities && (
                  <p className="work-description">{data.work_responsibilities}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      
      {(data.education_school || data.education_degree) && (
        <div className='topic-exp'>
          <h1 className='exp-topic'>Education</h1>
          <div className='exp-container'>
            <div className='exps'>
              <div className="education-entry">
                <div className="education-header">
                  <h3 className="education-title">{data.education_degree || "Bachelor of Science"}</h3>
                  <span className="education-date">
                    {data.education_startDate} {data.education_startDate && data.education_endDate ? '- ' : ''} {data.education_endDate}
                  </span>
                </div>
                <h4 className="education-school">{data.education_school || "University Name"}</h4>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

CvTemplate.propTypes = {
  data: PropTypes.object,
  toggleLinkedin: PropTypes.bool,
};
