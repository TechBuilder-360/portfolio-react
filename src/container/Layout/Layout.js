import React, { Component } from 'react';
import Container from '../Container';


class Layout extends Component {
    render() {
        return (
            <Container>
                <header>
                    <nav>
                        <h1>Navigation links goes here</h1>
                    </nav>
                </header>
                <main>
                    {this.props.children}
                </main>
            </Container>
        );
    }
}

export default Layout;