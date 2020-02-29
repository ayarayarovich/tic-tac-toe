import React from 'react';
import {library} from "@fortawesome/fontawesome-svg-core";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {faCircle} from "@fortawesome/free-regular-svg-icons";
import {TicTacToe} from "./components/TicTacToe";

library.add(faCircle, faTimes);

console.log(library);

export default class App extends React.Component {

    render() {
        return (
            <div id="app">
                <TicTacToe/>
            </div>
        );
    }

}