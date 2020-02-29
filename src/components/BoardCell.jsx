import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export class BoardCell extends React.Component {

    render() {
        const value = this.props.value;
        return (
            <td className="board-cell">
                <button onClick={this.props.onClick} className="board-cell__button">
                    <FontAwesomeIcon icon={{
                        prefix: value === "x" ? "fas" : value === "o" ? "far" : null,
                        iconName: value === "x" ? "times" : value === "o" ? "circle" : null
                    }}/>
                </button>
            </td>
        );
    }

}