import React, { Component } from 'react';
// material 
import { StylesProvider, createGenerateClassName } from '@material-ui/styles';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
// router 
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
// store 
import { Provider } from 'react-redux';
import store from './redux';
// globalization
import { IntlProvider } from 'react-intl'
// theme
import muiTheme from 'assets/theme/sample_manager.json';
// views
import Request from 'pages/Request';

// other componets
import Stepper from 'components/molecules/Stepper';

/* comment just for development purposes */
// import 'mock';

const generateClassName = createGenerateClassName({
  seed: 'sample-manager', // change name for your module
});

const theme = createMuiTheme(muiTheme);

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locale: localStorage.getItem('locale'),
      messages: localStorage.getItem('language')
    }
  }
  render() {
    return (
      <StylesProvider generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>
          <Provider store={store}>
            <IntlProvider locale={this.state.locale} messages={this.state.messages} defaultLocale={"en"}>
              <Router basename="/ebs/admin/sample-manager">
                <Stepper />
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => <Redirect to="/request" />}
                  />
                  <Route path="/request" component={Request} />
                  {/** Add here your routes per page */}
                </Switch>
              </Router>
            </IntlProvider>
          </Provider>
        </MuiThemeProvider>
      </StylesProvider>
    );
  }

  componentDidCatch(error, info) {
    console.log('App Error:', error);
    console.log('App Error Info:', info);
  }
}

export default App;
