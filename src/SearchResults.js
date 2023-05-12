import React from "react";
import Meaning from "./Meaning";

export default function SearchResults(props) {
  if (props.results) {
    return (
      <div className="Results text-start">
        <h2>{props.results.word}</h2>
        {props.results.meanings.map((meaning, index) => {
          return (
            <div key={index}>
              <Meaning data={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}