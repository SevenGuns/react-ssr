import React from 'react';
import { Route } from 'react-router-dom';
function Status({ code, children }) {
  return (
    <Route
      render={({ staticContext }) => {
        if (staticContext) {
          staticContext.statusCode = code;
        }
        return children;
      }}
    ></Route>
  );
}
export default function Notfound(props) {
  console.log(props);
  return (
    <Status code={404}>
      <div>没有页面: 404</div>
    </Status>
  );
}
