import React, { PureComponent, Suspense, lazy, Fragment } from "react";
import { hot } from "react-hot-loader";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import "./App.css";
const pagesRequire = require.context('./pages/', true, /.*\.jsx$/);
const Pages = pagesRequire.keys().map((pageKey) => {
    return pageKey.split('./')[1].replace('.jsx', '');
})
const Links = () => {
    return (
        <div className='App'>
            <ul>
                {
                    Pages.map((name, k) => {
                        return (
                            <li key={`${name}_${k}`}>
                                <Link to={`/${name}`}>
                                    {name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
class App extends PureComponent {
    render() {
        return (
            <Router>
                <Suspense fallback={<div>loading...</div>}>
                    <Switch>
                        {
                            Pages.map((name, k) => {
                                return (<Route path={`/${name}`} component={lazy(() => import(`./pages/${name}`))} key={`${name}_${k}`} />)
                            })
                        }
                        <Route path="/" component={Links} />
                    </Switch>
                </Suspense>
            </Router>
        );
    }
}

export default hot(module)(App);