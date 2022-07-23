import {Chat,Login} from "./Components";
import { LOGIN_ROUTE,CHAT_ROUTE } from "./utils/consts";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: <Login/>
    }
]

export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        Component: <Chat/>
    }
]