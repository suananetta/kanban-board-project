import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Board from "./Board/Board";
import TaskDescription from './TaskDescription/TaskDescription';

function Main(props) {
    const Router = createBrowserRouter([
        {
            path: '/',
            element: <Board {...props}/> 
        },
        {
            path: '/tasks/:taskId',
            element: <TaskDescription {...props}/> 
        }
    ])
    return (
            <main>
                <RouterProvider router={Router}/>
            </main>
    )
}

export default Main;