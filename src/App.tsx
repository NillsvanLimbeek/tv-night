import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { SignUp } from './views/SignUp';
import { Home } from './views/Home';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/signup" component={SignUp} />
                    <Route path="/" component={Home} exact />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
