import "./Add.css"

const Add = () => {
    return ( <div className="add">
        <form>
            <label>Typ</label>
            <select name="sd" id="type-input">
                <option value="clanek">Článek</option>
            </select>
            <label >Název článku</label>
            <input id="title-input" type="text" />
            <label>Obsah článku</label>
            <textarea name="" id="textarea-input" cols="50" rows="5"></textarea>
            <button type="submit" id="submit-button">Potvrdit</button>
        </form>
    </div> );
}
 
export default Add;