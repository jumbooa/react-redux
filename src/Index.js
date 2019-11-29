//import FormContainer from "./js/components/container/FormContainer.jsx";
//import Game from "./js/components/container/Game.jsx";

/*
import store from "./js/store/index"
import {addArticle} from "./js/actions/index"

window.store=store
window.addArticle=addArticle
*/


import React from "react"
import {render} from "react-dom"
import {Provider} from "react-redux"
import store from "./js/store/index"
import App from "./js/components/presentational/App"

render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById("game")
)
