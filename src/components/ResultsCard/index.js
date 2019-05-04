import React from "react";

function ResultsCard(props) {
    return (
        // start of outside border div
        <div
            style={{
                border: "1px, black, solid"
            }}>
            {/* title div floated left */}
            <div>
            <div
                style={{
                    float: "left"
                }}>
                <h5>{props.title}</h5>
                <h6>Written by {props.authors}</h6>
            </div>
            {/* save buttons floated  */}
            <div
                style={{
                    float: "right"
                }}>
                <button {...props} onClick="handleViewMovie">View</button>
                {props.saved} ? <button {...props} onClick="handleDeleteMovie">Delete</button> : <button {...props} onClick="handleSaveMovie">Save</button>;
            </div>
            </div>
            {/* end of div for title and save buttons */}

            {/* start of synopsis section */}
            <div>
                <div
                    style={{
                        float: "left",
                        backgroundImage: props.image ? `url(${props.image})` : "none"
                    }}>
                </div>
                <div
                    style={{
                        float: "right"
                    }}>
                    <p>{props.description}</p>
                </div>
                <div
                    style={{
                        float: "none",
                        clear: "both"
                    }}>
                </div>
            </div>
        </div>
    );
}

export default ResultsCard;