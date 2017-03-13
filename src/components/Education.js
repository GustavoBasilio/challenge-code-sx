import React, {PropTypes} from 'react';

const Education = (props) => {
    return (
         <section id="education">
            <header>
                <i className="fa fa-graduation-cap title-icon" aria-hidden="true"></i>
                <h2>{props.Education.title}</h2>
            </header>
            <article>
            {props.Education.university.map((item,index) => (
                <div key={index}>
                    <div className="date-block">
                        <span>{item.month}</span>
                        <span>{item.year}</span>
                    </div>
                    <div className="info-block">
                        <label>{item.courseName}</label>
                        <span>{item.universityName}, {item.universityCity}</span>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
            </article>
        </section>
    );
};

Education.propTypes = {
  Education: React.PropTypes.object.isRequired
};

export default Education;