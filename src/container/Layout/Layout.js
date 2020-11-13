import React, { Component } from 'react';
import Container from '../Container';
import HomeNavBar from '../../components/Navigation/main-navigation';
import classes from './Layout.module.css';
import CarouselImage from '../../components/Carousel/carousel';


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
                    </section>
                    <aside className={classes.Aside}>
                        <CarouselImage/>
                    </aside>
                </main>
                {/* <Footer/> */}
            </Container>
        );
    }
}

export default Layout;