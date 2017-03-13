'use strict';
import React, {PropTypes} from 'react';

const Experience = (props) => {
    return (
         <section id="experience">
            <header>
                <i className="icon-experience title-icon" aria-hidden="true"></i>
                <h2>{props.Experience.title}</h2>
            </header>
            <article>
            {props.Experience.company.map((item,index) => (
                <div key={index}>
                    <div className="date-block">
                        <span>{item.month}</span>
                        <span>{item.year}</span>
                    </div>
                    <div className="info-block">
                        <label>{item.roleName}</label>
                        <span>{item.companyName}, {item.companyCity}</span>
                        <p>{item.description}</p>
                    </div>
                </div>
            ))}
            </article>
        </section>
    );
};

Experience.propTypes = {
  Experience: React.PropTypes.object.isRequired
};

export default Experience;