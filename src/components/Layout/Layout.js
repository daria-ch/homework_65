import React, {Fragment} from 'react';
import Navigation from "../Navigation/Navigation";
import {Container} from "reactstrap";

const Layout = props => (
    <Fragment>
        <Navigation/>
        <Container>
            <main style={{marginTop: '50px'}}>
                {props.children}
            </main>
        </Container>
    </Fragment>
);

export default Layout;