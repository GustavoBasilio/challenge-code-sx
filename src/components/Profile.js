import React, {PropTypes} from 'react';

const Profile = (props) => {
    return (
        <section id="profile-info">
            <header>
                <i className="icon-profile title-icon" aria-hidden="true"></i>
                <h2>{props.Profile.title}</h2>
            </header>
            <article>
                <p>{props.Profile.description}</p>
            </article>
        </section>
    );
};

Profile.propTypes = {
  Profile: React.PropTypes.object.isRequired
};

export default Profile;