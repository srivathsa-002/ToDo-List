import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";
import "../styles/components/container.css";
import ToDoList from "../components/organism/TodoList";

const Home = () => {
  const { isAuthenticated } = useAuth0() || {};
  return(
  <Fragment>
    {!isAuthenticated && (
      <div className="home-content">
        <h3>Please Login to Todo List App...</h3>
      </div>
    )}
    {isAuthenticated && <ToDoList />}
    </Fragment>
  );
};

export default Home;
