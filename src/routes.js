import React, {Suspense} from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import App from "./pages/App";
import { isAuthenticated } from "./services/auth";
import CircleProgress from "./components/circularProgress/CircleProgress";
import './styles/global.css';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Suspense fallback={<div className="mt-5 pt-5"> <CircleProgress /> </div>}>
      <Switch>
          <Route exact path="/" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute path="/app" component={App} />
        <Route path="*" component={() => <h1 className="not-found">Você viajou até uma galáxia muito distante!<h2>ERROR_404</h2></h1> } />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Routes;