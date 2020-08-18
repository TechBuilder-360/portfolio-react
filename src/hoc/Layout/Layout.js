import React, { Component } from './node_modules/react';
import Aux from '../Aux';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <header>
                    <nav>
                        <h1>Navigation links goes here</h1>
                    </nav>
                </header>
                <main>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;