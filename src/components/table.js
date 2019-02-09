import React from 'react';


function Table(props){

    const tableRow=props.data.map((item,index)=>{
        /*item is the entire object that contains the student name, course and grade*/
        return(
            <tr key={index}>
                <td>{item.student}</td>
                <td>{item.course}</td>
                <td>{item.grade}</td>
            </tr>
        );
    });


    return(
        <table className="table">
            <thead className="thead-inverse">
                <tr>
                    <th>Name</th>
                    <th>Grade</th>
                    <th>Course</th>
                </tr>
            </thead>
            <tbody>
                {tableRow}
            </tbody>
        </table>
    )
}

export default Table;

