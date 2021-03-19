require("dotenv").config();
const app = require("./app");

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

app.listen(app.get("port"));
console.log(`Servidor corriendo en ${process.env.PUBLIC_URL}`);
