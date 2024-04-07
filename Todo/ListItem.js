import { useState } from "react";
import './ListItem.css';
import { FaBeer, FaEdit } from "react-icons/fa";

const ListItem = ({index, data, handleEdit, handleDelete}) => {
    console.log(index, data);
    return (
        <div className="dataList">
           <h3>{data}</h3>
           <button onClick={() => handleEdit(index)}><FaEdit /></button>
           <button onClick={() => handleDelete(index)}>test</button>
        </div>
    )
}
export default ListItem



