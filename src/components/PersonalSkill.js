import React, {PropTypes} from 'react';

const PersonalSkill = (props) => {
     return (
         <section id="personal-skill">
            <header>
                <i className="fa fa-bolt title-icon" aria-hidden="true"></i>
                <h2>{props.PersonalSkill.title}</h2>
            </header>
            <article>
                <p>
                    <label>Management</label>
                    {props.progressBar(props.PersonalSkill.management)}
                </p>
                <p>
                    <label>TeamWork</label>
                    {props.progressBar(props.PersonalSkill.teamWork)}
                </p>
                <p>
                    <label>Creative</label>
                    {props.progressBar(props.PersonalSkill.creative)}
                </p>
                <p>
                    <label>Communication</label>
                    {props.progressBar(props.PersonalSkill.communication)}
                </p>
            </article>
        </section>
    );
};

PersonalSkill.propTypes = {
  PersonalSkill: React.PropTypes.object.isRequired,
  progressBar: React.PropTypes.func.isRequired
};

export default PersonalSkill;