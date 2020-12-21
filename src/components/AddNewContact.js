import React from 'react';
import ContactList from './ContactList';
import SortSearchBar from './SortSearchBar'
import contactsData from '../Data/contactsData';



class AddNewContact extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        contactName: '', 
        contactPhone: '', 
        contactList: contactsData
      };
    }

    newContactSubmitHandler = (event) => {
      event.preventDefault();
      if( this.state.contactName !== '' && this.state.contactPhone !== '') {
        let newName = this.state.contactName;
        let newPhone = this.state.contactPhone;
        let currentList = [...this.state.contactList, {"name": newName, "phone": newPhone, "favorite": false}];
        this.setState({
          contactList: currentList
        });
        this.setState({ contactName: '' });
        this.setState({ contactPhone: '' });
      }
    }

    nameChangeHandler = (event) => {
      this.setState({ contactName: event.target.value });
    }

    phoneChangeHandler = (event) => {
      this.setState({ contactPhone: event.target.value });
    }

    deleteContactHandler = (contactToDelete) => {  
      this.setState({ 
        contactList: this.state.contactList.filter( (user) => {
          return user.phone !== contactToDelete; 
        })
      });
    }

    favoriteContactHandler = (favorite) => {
      let tempList = [...this.state.contactList];
      for( let i = 0; i < tempList.length; i++ ) {
        if( tempList[i].phone === favorite ) {
          tempList[i].favorite = !tempList[i].favorite;
          break;
        }
      }
      this.setState({ contactList: tempList });
    }

    sortContactsHandler = () => {
      let tempSortedList = [...this.state.contactList];
      function compare(a, b) {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        let comparison = 0;
        if (nameA > nameB) {
          comparison = 1;
        } else if (nameA < nameB) {
          comparison = -1;
        }
        return comparison;
      }
      tempSortedList.sort(compare);
      this.setState({ contactList: tempSortedList });
    }


    render() {
      return (
        <div> 
          <div className="add-new-box">
            <div className="add-new-text-banner">
              Add New Contact
            </div>
            <form className="form-inline" onSubmit={this.newContactSubmitHandler}>
              <input
                type='text'
                name="Name"
                placeholder="Name"
                onChange={this.nameChangeHandler}
                className="form-control input-custom"
                value={this.state.contactName}
              />
              <input
                type='text'
                name="Phone"
                placeholder="Phone"
                onChange={this.phoneChangeHandler}
                className="form-control input-custom"
                value={this.state.contactPhone}
              />
              <input type='submit' className="btn add-btn" value="+ Add"/>
            </form>
          </div>

        <SortSearchBar 
          sort={this.sortContactsHandler}
        />  

        <ContactList 
          listOfContacts={this.state.contactList} 
          deleteContact={this.deleteContactHandler}
          favoriteContact={this.favoriteContactHandler}
        />
        </div> 
      );
    }
  }

export default AddNewContact;