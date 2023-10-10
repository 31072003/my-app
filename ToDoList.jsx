import React, { useState } from 'react';

const ToDoList = () => {
    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);
    const [toggle, setToggle] = useState(true); // Corrected typo
    const [editItem, setEditItem] = useState(null);

    const addItem = () => {
        if (!inputData) {
            alert('Wait! Input is empty.'); // Changed the alert message
        } else if (inputData && !toggle) {
            setItems(
                items.map((elem) => {
                    if (elem.id === editItem) {
                        return { ...elem, name: inputData };
                    }
                    return elem;
                })
            );
            setToggle(true); // Corrected typo
            setInputData('');
            setEditItem(null); // Corrected typo
        } else {
            const allInputData = { id: new Date().getTime().toString(), name: inputData };
            setItems([...items, allInputData]);
            setInputData('');
        }
    };

    const deleteItem = (id) => { // Changed the parameter name to 'id'
        const updatedItems = items.filter((elem) => {
            return id !== elem.id; // Corrected the condition
        });
        setItems(updatedItems);
    };

    const editExistingItem = (id) => { // Renamed the function to avoid conflict
        let newEditItem = items.find((elem) => {
            return elem.id === id; // Corrected the condition
        });
        console.log(newEditItem);
        setToggle(false); // Corrected typo
        setInputData(newEditItem.name);
        setEditItem(id);
    };

    return (
        <div>
            <div className='main'>
                <div className='child'>
                    <figure>
                        <h1>Todo List</h1>
                        <figcaption>Add your list.</figcaption>
                    </figure>
                    <div className='addIteams'>
                        <input
                            type="text"
                            placeholder='Add items...'
                            value={inputData}
                            onChange={(event) => setInputData(event.target.value)}
                        />
                        {toggle ? (
                            <i
                                className="fa fa-plus add btn"
                                title='Add items'
                                onClick={addItem}
                            ></i>
                        ) : (
                            <i
                                className="far fa-edit alt add btn"
                                title='Update items'
                                onClick={addItem}
                            ></i>
                        )}
                    </div>
                    <div className='showIteams'>
                        {items.map((elem) => (
                            <div className='eachitem' key={elem.id}>
                                <h3>{elem.name}</h3>
                                <div className='todo-btn'>
                                    <i
                                        className="far fa-edit alt add btn"
                                        title='Edit item'
                                        onClick={() => editExistingItem(elem.id)}
                                    ></i>

                                    <i
                                        className="far fa-trash-alt add btn"
                                        title='Delete item'
                                        onClick={() => deleteItem(elem.id)}
                                    ></i>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='showiteams'>
                    <button className='effect 04' data-sm-link-text='Remove all'>
                        <span>Check list.</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ToDoList;
