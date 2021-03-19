import React from "react";
import ReactDOM from "react-dom";
import Routes from "./pages/Routes/index.jsx";
import "styles/reset.scss";

//Importando de forma asíncrona el scss global
import("styles/index.scss");

/**
 * Challenge para Mercado Libre,
 * by Emilia Cabral Benitez.
 */

//       _=_
//      /   \
//    /|     |\
//   /_|     |_\
//     |     |
//     |     |
//     |     |
//     |     |
//     |     |
//     |     |
//    /|     |\
//   / |     | \
//  {  |     |  }
//  { /|     |\ }
//  {/ |_____| \}
//      ^ | ^
//      ( | )
//      ( . )
//     (( | ))
//     (( | ))
//      (( ))
//      ( | )
//     (( . ))
//     (( | ))
//      (( ))
//       ( )
//        .
//        .

ReactDOM.render(<Routes />, document.getElementById("root"));
