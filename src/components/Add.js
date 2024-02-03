import { useState } from "react"
import "./Add.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Add = () => {
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
  
    const [feedback, setFeedback] = useState()

    const onSubmitHandler = event => {
        event.preventDefault();
    
        const newArticle = {
          title: title,
          text: text,
        }
    
    
        fetch('http://localhost:8000/news', {
          method: 'POST', 
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newArticle) 
        }).then(r=> r.json())
          .then(json => setFeedback(json))
          .finally(()=> {
            
            toast.success("Článek byl přidán do košíku", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
            setTitle("");
            setText("");
          });
    
    
      }

    return ( <div className="add">
        <h2 className="add-heading">Přidat článek na domovskou stránku</h2>
        <form onSubmit={onSubmitHandler}>
            <label>Typ</label>
            <select name="sd" id="type-input">
                <option value="clanek">Článek</option>
            </select>
            <label >Název článku</label>
            <input id="title-input" type="text" onChange={(e) => setTitle(e.target.value)} />
            <label>Obsah článku</label>
            <textarea name="" id="textarea-input" cols="50" rows="5" onChange={(e) => setText(e.target.value)}></textarea>
            <button type="submit" id="submit-button">Potvrdit</button>
        </form>
        <ToastContainer/>
    </div> );
}
 
export default Add;