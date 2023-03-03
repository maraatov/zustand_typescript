import React from 'react';

import {ToDoList} from '../ToDoList';
import {ToDoListDone} from '../ToDoListDone';


export const App: React.FC = () => {
    return (
        <div>
            <ToDoList />
            <ToDoListDone />
            <ToDoList mainTitle="To Do App Copy"/>
        </div>
    );
}