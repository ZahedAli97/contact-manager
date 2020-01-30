import React from "react";

export default function NotFound() {
    return (
        <div>
            <h1 className="display-4">
                <span className="text-danger"> 404 </span> Page Not Found
      </h1>
            <p className="lead">
                Sorry, that page does not exist.{"      "}
                <span style={{ fontSize: 40 }}>
                    <i class="far fa-frown text-danger" />
                </span>
            </p>
        </div>
    );
}