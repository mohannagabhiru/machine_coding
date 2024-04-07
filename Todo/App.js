import "./styles.css";
import { FaBeer, FaEdit } from "react-icons/fa";
import { useState } from "react";
import ListItem from './ListItem';

export default function App() {
  const [name, setName] = useState("");
  const [items, setItems] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editedValue, setEditedValue] = useState('');
  const [editingIndex, setEditingIndex] = useState('');
 
  const handleAdd = () => {
      setItems([...items, name])
  }

  const handleAdds = (index) => {
    console.log("edit", index);
    setEdit(true);
    setEditedValue(items[index])
    setEditingIndex(index);
  }

  const handleEdit = () => {
    const result = items.map((data, index) => {
      if(index == editingIndex){
        return editedValue
      }else{
        return data
      }
    })
    setItems(result)
    setEdit(false);
  }

  const handleDelete = (passedIndex) => {
    const result = items.filter((data, index) => index != passedIndex)
    console.log(result, "delete");
    setItems(result);
  }

  return (
    <div className="App commonFlex">
      <div className="container">
          <div className="inputField">
            <input value={name} placeholder="enter name" className="commonButtonStyles"  onChange={(e) => setName(e.target.value)}/>
            <button className="commonButtonStyles" onClick={handleAdd}>Enter</button>
          </div>
          {
            edit && (
              <div className="inputField">
              <input value={editedValue} placeholder="enter name" className="commonButtonStyles"  onChange={(e) => setEditedValue(e.target.value)}/>
              <button className="commonButtonStyles" onClick={handleEdit}>Enter</button>
            </div>
            )
          }
          {
            items.length > 0 && items.map((item, index) => {
              return <ListItem data={item} index={index} handleDelete={handleDelete} handleEdit={handleAdds}/>
            })
          }
      </div>
    </div>
  );
}
