import React, { Component } from 'react';
import Container from '../Container';
import HomeNavBar from './Navigation/main-navigation';
import classes from './Layout.module.css';
import CarouselImage from './Carousel/carousel';


class Layout extends Component {
    render() {
        return (
            <Container>
                <header>
                    <HomeNavBar/>
                </header>
                <main className={classes.Main}>
                    <section className={classes.Section}>
                        {this.props.children}
                        Registration/Sign in form goes here
                    </section>
                    <aside className={classes.Aside}>
                        <CarouselImage/>
                    </aside>
                </main>
            </Container>
        );
    }
}

export default Layout;