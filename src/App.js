import React, { Component } from "react";
import Shop from "./Shop.js";
import Form from "./Form";
import List from "./List";
import Table from "./Table";
import { Route } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div>
                <Route path="/shop" exact component={Shop} />
                <Route path="/form" exact component={Form} />
                <Route path="/list" exact component={List} />
                <Route path="/table" exact component={Table} />
            </div>
        )
    }
}

export default App;