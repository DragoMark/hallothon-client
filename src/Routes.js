import { Route, Router, Switch } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Summary from "./Pages/Summary";
import history from "./utils/history";

const Routes = () => {
	return (
		<Router history={history}>
			<Navbar></Navbar>
			<Switch>
				<Route path="/home" exact component={Home} />
				<Route path="/summary" exact component={Summary} />
			</Switch>
		</Router>
	);
};

export default Routes;
