import React from 'react';
import ReactDOM from 'react-dom';//This is the default ReactDOM.
import GridContainer from 'components/Grid/GridContainer';//This is the button that was created (COMPONENT).

// import { render, cleanup } from '@testing-library/react';//This is the library downloaded to render th components and verify if that process is correct.
import "@testing-library/jest-dom";//This is the library that provides the assertions for rendering process. 
import '@testing-library/jest-dom/extend-expect';

// afterEach(cleanup);
test('Renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <GridContainer/>, 
        div)
});
