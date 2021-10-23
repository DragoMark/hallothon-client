import { Route, Router, Switch } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import history from "./utils/history";

const Routes = () => {
	return (
		<Router history={history}>
			<Navbar></Navbar>
			<Switch>
				<Route path="/home" exact component={Home} />
			</Switch>
		</Router>
	);
};

export default Routes;
