// import * as Admin from "./admin.js"
import * as Product from "./admin.js"
import * as Header from "../header.js"
import addSection from "./adminRender.js"

Header.appendHeadersub()
document.body.append(addSection())
get()
