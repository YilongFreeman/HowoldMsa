import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Contact from '../Page/Contact'
import Howold from'../Page/Howold'



export const AppRouter: React.StatelessComponent<{}> = () => {
    return (

        <BrowserRouter>
            <div>
                <main>
                 <Route exact={true} path="/" component={Contact} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/Howold" component={Howold} />
                  
                </main>
            </div>
        </BrowserRouter>

    );
}
