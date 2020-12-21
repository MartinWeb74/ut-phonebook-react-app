import React from 'react';

class SortSearchBar extends React.Component {
    render() {
        return (
            <div className="sort-bar">
              <p className="contacts-section-title">
                <span className="sort-link"
                  onClick={ () => this.props.sort() }
                  >
                  Sort Contacts By Name (A-Z)
                </span>
              </p>
            </div>
          );
    }
}
  
export default SortSearchBar;