import React from 'react';
import Table from './table';


const students=[
    {student:'Matt',
     course: 'Spanish',
     grade: 100},
    {student:'Diana',
        course: 'Math',
        grade: 100},
    {student:'Sky',
        course: 'Crime',
        grade: 100}
];

function App(){
    return(
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
    )
}

export default App;


