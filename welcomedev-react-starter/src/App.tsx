import React, { ReactElement, useReducer, FC } from "react";
import {
  createMuiTheme,
  Theme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

// components
import Layout from "./components/Layout";

// theme
import { darkTheme } from "./theme/appTheme";

// app routes
import { routes } from "./config";

// constants
import { APP_TITLE } from "./utils/constants";

// interfaces
import RouteItem from "./model/RouteItem.model";

// define app context
const AppContext = React.createContext(null);

// default component
const DefaultComponent: FC<{}> = (): ReactElement => (
  <div>{`No Component Defined.`}</div>
);

function App() {
  // define custom theme
  let theme: Theme = createMuiTheme(darkTheme);
  theme = responsiveFontSizes(theme);

  return (
    <>
      <Helmet>
        <title>{APP_TITLE}</title>
      </Helmet>
      <AppContext.Provider value={null}>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Layout>
                {/* for each route config, a react route is created */}
                {routes.map((route: RouteItem) => (
                  route.subRoutes ? route.subRoutes.map((item: RouteItem) => (
                    <Route
                      key={`${item.key}`}
                      path={`${item.path}`}
                      component={item.component || DefaultComponent}
                      exact
                    />
                  )) :
                    <Route
                      key={`${route.key}`}
                      path={`${route.path}`}
                      component={route.component || DefaultComponent}
                      exact
                    />
                ))}
              </Layout>
            </Switch>
          </Router>
        </ThemeProvider>
      </AppContext.Provider>
    </>
  );
}

export default App;