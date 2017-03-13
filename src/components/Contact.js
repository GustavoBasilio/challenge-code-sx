import React, {PropTypes} from 'react';

const Contact = (props) => {
    return (
         <section id="contact-info">
            <header>
                <i className="icon-contact title-icon" aria-hidden="true"></i>
                <h2>{props.Contact.title}</h2>
            </header>
            <article>
                <p><i className="fa fa-map-marker" aria-hidden="true"></i>{props.Contact.address}</p>
                <p><i className="fa fa-phone" aria-hidden="true"></i>{props.Contact.tel}</p>
                <p><i className="fa fa-envelope-o" aria-hidden="true"></i>{props.Contact.email}</p>
                <p><i className="fa fa-dribbble" aria-hidden="true"></i>{props.Contact.webSite}</p>
            </article>
        </section>
    );
};

Contact.propTypes = {
  Contact: React.PropTypes.object.isRequired
};

export default Contact;