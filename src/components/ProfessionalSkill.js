'use strict';
import React, {PropTypes} from 'react';

const ProfessionalSkill = (props) => {
     return (
         <section id="professional-skill">
            <header>
                <i className="fa fa-lightbulb-o title-icon" aria-hidden="true"></i>
                <h2>{props.ProfessionalSkill.title}</h2>
            </header>
            <article>
                {props.ProfessionalSkill.tools.map((item,index) => ( 
                    <p key={index}>
                        <label>{item.toolName}</label>
                        {props.progressBar(item.toolsSkill)}
                    </p>
                ))}
            </article>
        </section>
    );
};

ProfessionalSkill.propTypes = {
  ProfessionalSkill: React.PropTypes.object.isRequired,
  progressBar: React.PropTypes.func.isRequired
};

export default ProfessionalSkill;