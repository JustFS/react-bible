import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Search from '../../components/appPictures/Search';
import './AppPictures.scss'

class AppPictures extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="app-pictures">
          <Search />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default AppPictures;