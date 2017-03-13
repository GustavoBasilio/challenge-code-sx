import React, {PropTypes} from 'react';

const Name = (props) => {
    return (
        <section id="profile-name">
            <figure>
                <img src={require("../images/profile-image.png")} alt={props.Name.name} title={props.Name.profession}/>
            </figure>
            <figcaption>
                <h1>{props.Name.name}</h1>
                <span>{props.Name.profession}</span>
            </figcaption>
        </section>
    );
};

Name.propTypes = {
  Name: React.PropTypes.object.isRequired
};

export default Name;