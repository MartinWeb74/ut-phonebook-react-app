import React from 'react';
import UserIcon from "./Icons/UserIcon";
import PhoneIcon from "./Icons/PhoneIcon";
import DeleteIcon from "./Icons/DeleteIcon";
import StarIcon from "./Icons/StarIcon";



class ContactList extends React.Component {
      
  render() {

    return (
      <React.Fragment>
      <p className="contacts-section-title">Favorite Contacts (Add favorites by clicking the star icon)</p> 
      <ul className="list-group">

        {this.props.listOfContacts.map( (contact, index) => {

          return contact.favorite === true ? 
          
          <li key={index} className="list-group-item list-row">
            <div className="list-section user-icon-list"><UserIcon /></div>
            <div className="list-section user-name-list">{contact.name}</div>
            <div className="list-section phone-icon-list"><PhoneIcon /></div>
            <div className="list-section phone-number-list">{contact.phone}</div>
            <div className="list-section delete-icon-list">
              <span className="favorite-contact" onClick= { () => this.props.favoriteContact(contact.phone) } title="Remove from Favorites">
                &#215;
              </span>
              <span className="delete-contact" onClick= { () => this.props.deleteContact(contact.phone) }>
                  <DeleteIcon />
              </span>
            </div>
          </li>
          
          : null

        })}
       
      </ul>

      <p className="contacts-section-title">All Contacts</p>  
      <ul className="list-group">
        {this.props.listOfContacts.map( (contact, index) => {

          return(
          <li key={index} className="list-group-item list-row">
            <div className="list-section user-icon-list"><UserIcon /></div>
            <div className="list-section user-name-list">{contact.name}</div>
            <div className="list-section phone-icon-list"><PhoneIcon /></div>
            <div className="list-section phone-number-list">{contact.phone}</div>
            <div className="list-section delete-icon-list">
              { 
                contact.favorite ? 
                <span className="favorite-contact-checked" title="Already in Favorites"  >
                  &#10003;
                </span>
                : 
                <span 
                className="favorite-contact" 
                onClick= { () => this.props.favoriteContact(contact.phone) }>
                <StarIcon />
              </span> 
              }
              
              <span className="delete-contact" onClick= { () => this.props.deleteContact(contact.phone) }>
                  <DeleteIcon />
              </span>
            </div>
          </li>
          )

        })}
      </ul>
      </React.Fragment>
    ) // end return 
  } // end render
} // end class
  
export default ContactList;