import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { SignUp } from './views/SignUp';
import { SignIn } from './views/SignIn';
import { Home } from './views/Home';
import { PrivateRoute } from './components/PrivateRoute';

function App() {
    return (
        <div className="App h-screen w-screen">
            <Router>
                <Switch>
                    <Route path="/signup" component={SignUp} />
                    <Route path="/signin" component={SignIn} />
                    <PrivateRoute path="/" component={Home} exact />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
