import React, {PropTypes} from 'react';

const Award = (props) => {
    return (
         <section id="award">
            <header>
                <i className="icon-award title-icon" aria-hidden="true"></i>
                <h2>{props.Award.title}</h2>
            </header>
            <article>
                <div className="date-block">
                    <span>{props.Award.month}</span>
                    <span>{props.Award.year}</span>
                </div>
                <div className="info-block">
                    <label>{props.Award.projectName}</label>
                    <span>{props.Award.awardName}, {props.Award.city}</span>
                    <p>{props.Award.description}</p>
                </div>
            </article>
        </section>
    );
};

Award.propTypes = {
  Award: React.PropTypes.object.isRequired
};

export default Award;