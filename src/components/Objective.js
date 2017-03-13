import React, {PropTypes} from 'react';

const Objective = (props) => {
    return (
         <section id="objective-info">
            <header>
                <i className="icon-leaf title-icon" aria-hidden="true"></i>
                <h2>{props.Objective.title}</h2>
            </header>
            <article>
                <p>{props.Objective.description}</p>
            </article>
        </section>
    );
};

Objective.propTypes = {
  Objective: React.PropTypes.object.isRequired
};

export default Objective;