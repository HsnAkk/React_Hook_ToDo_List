import React, { useState, Fragment } from 'react';
import { StyledDiv, Button, Form } from './Layout.style';
import { v4 as uuid } from 'uuid';
import HyperModal from 'react-hyper-modal';
import { OverlayTrigger } from 'react-bootstrap';
import { popoverBox } from './Popover';



function Layout() {

    // to manage the modal
    const [ modalOpen, setModalOpen ] = useState(false)
    // to get the events data
    const [ todo, setTodo ] = useState('')
    const [ label, setLabel ] = useState([])
    const [ date, setDate ] = useState('')
    const [ comment, setComment ] = useState('')
    // to show all events on browser
    const [toDos, setToDos ] = useState([])

    //to submit the events
    const submitHandler = (e) => {
        e.preventDefault();
        //console.log(new Date(date).getTime())
        const guncel = new Date().getTime()
        // console.log(guncel)
        const timeEvent = new Date(date).getTime()
        //console.log(timeEvent)
        const timeDiff = (timeEvent - guncel)/86400000;
        console.log(timeDiff)

        // console.log('Hello from submitHandler')
        // console.log(todo, label, date, comment);
        setToDos([...toDos, {
            id: uuid(),
            todo,
            label,
            date,
            comment,
            timeDiff, 
            done: false 
        }])
        setTodo('')
        setLabel([])
        setDate('')
        setComment('')
        document.querySelectorAll('input[type=checkbox]').forEach( item => item.checked = false)
        setModalOpen(false)
    }

    // to manage to get all Labels regarding the event
    const labelHandler = (e) => {
        if (e.target.checked) {
            if (!label.includes(e.target.value)) {
                setLabel([...label, e.target.value])
            }
        } else {
            if (label.includes(e.target.value)) {
                setLabel(label.filter( item => item !== e.target.value))
            }
        }
    }

    // to show the event that has been already done
    const doneHandler = (elem) => {
        console.log('elem : ', elem);
        setToDos( toDos.map( item =>  item.id === elem.id ? {...item, done: !item.done} : item))
    }

    //to delete the events
    const deleteHandler = (elem) => {
        //console.log('elem : ', elem);
        setToDos(toDos.filter( faal => faal.id !== elem.id ))      
    }


    //useEffect( () => console.log('toDos :', toDos))
        
    return (
        <Fragment>
           
            <StyledDiv className="col-12">
                <div className="topic">
                    ToDos List
                </div>
                <Button primary onClick= { () => setModalOpen(true) }>Add ToDo</Button>
                {
                    toDos.map( item =>   
                                        <div className= { item.done ? "todos done" : "todos"} key={item.id} >
                                            <div className="todos-top">
                                                <div className="label-box">{item.label}</div>
                                                <div className="buttons"> 
                                                    <span role="img" aria-label="done" onClick={() => doneHandler(item)}>&#x2705;</span> 
                                                    <span role="img" aria-label="delete" onClick={() => deleteHandler(item)}>&#x274C;</span> 
                                                </div>
                                            </div>
                                            <div className="todos-bottom">
                                                <div className="todo-box">{item.todo}</div>
                                                <div className="date-comm">
                                                    <div className={item.timeDiff > 1 ? "datebox bg-relax" : item.timeDiff > 0 ? "datebox bg-warn" : "datebox bg-past"} > <span role="img" aria-label="date">&#x1F4C6;</span> {item.date}</div>
                                                    <OverlayTrigger placement="top" overlay={popoverBox (item.comment)}>
                                                        <div className="comments">{item.comment ? <span role="img" aria-label="comment">&#x1F4AC;</span> : null}</div>
                                                    </OverlayTrigger>


                                                </div>
                                            </div>
                                        </div>
                    )
                }   
            </StyledDiv>
            
            <HyperModal isOpen={ modalOpen }
                        requestClose={ () => setModalOpen(false) } 
            >
                <Form className="form-box" onSubmit={submitHandler}>
                    <label htmlFor="todo">ToDo</label>
                    <input type="text" id="todo" value= {todo} onChange={ e => setTodo(e.target.value)} />
                    <label>Label</label>
                    <fieldset>
                        <div>
                            <input type="checkbox" value='&#x1F46A;' onChange={ labelHandler } /> &#x1F46A; Family
                        </div>
                        <div>
                            <input type="checkbox" value='&#x1F3E0;' onChange={ labelHandler } /> &#x1F3E0; Home
                        </div>
                        <div>
                            <input type="checkbox" value="&#x1F477;" onChange={ labelHandler } /> &#x1F477; Business
                        </div>
                        <div>
                            <input type="checkbox" value="&#x1F6CD;" onChange={ labelHandler } /> &#x1F6CD; Shopping
                        </div>
                        <div>
                            <input type="checkbox" value="&#x1F393;"  onChange={ labelHandler }/> &#x1F393; School
                        </div>
                        <div>
                            <input type="checkbox" value="&#x1F6A8;" onChange={ labelHandler } /> &#x1F6A8; Emergency
                        </div>
                        <div>
                            <input type="checkbox" value="&#x23F0;"  onChange={ labelHandler }/> &#x23F0; Important
                        </div>
                        <div>
                            <input type="checkbox" value="&#x1F36E;"  onChange={ labelHandler }/> &#x1F36E; Not Important
                        </div>
                    </fieldset>
                    <label htmlFor="date">Due To</label>
                    <input type="date" id="date" value={date} onChange={ e => setDate(e.target.value) } />
                    <label htmlFor="comment">Comment</label>
                    <textarea id="comment" value={comment} onChange={ e => setComment(e.target.value) } />
                    
                    <Button type="submit" primary>Add Item</Button>
                </Form>
            </HyperModal>

        </Fragment>
    )
}

export default Layout
