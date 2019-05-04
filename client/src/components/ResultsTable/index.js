import React from "react";

function ResultsTable(props, children) {
  return (
<div 
style={{
    border: "1px, black, solid"
    }}>
<h4>{props.tableName}</h4>
{children}
{/* //look this up in other files ^^^^ */}
</div>
  );
}

export default ResultsTable;