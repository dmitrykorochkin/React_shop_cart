import "./style.scss";

const Count = ({count, increase, decrease, changeValue, id}) => {
    return ( 
        <div className="count">
            <div className="count__box">
                <input onChange={(e) => {changeValue(id, +e.target.value)}} className="count__input" min="1" max="100" type="number" value={count} />
            </div>
            <div className="count__controls">
                <button type="button" className="count__up" onClick={()=>{increase(id)}}>
                    <img src="./img/icons/arrow-up.svg" alt="arrow-up" />
                </button>
                <button type="button" className="count__down" onClick={() => {decrease(id)}}>
                    <img src="./img/icons/arrow-down.svg" alt="arrow-down" />
                </button>
            </div>
        </div>
     );
}
 
export default Count;