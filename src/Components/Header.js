import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Header({queryValue,setQueryValue}) {
        return (
        <div className="header">
            <FontAwesomeIcon icon='search' />
            <input 
        type="text" 
        placeholder="Search for photo"
        value={queryValue}
        onChange={(event)=>setQueryValue(event.target.value)}
        />

              </div>

    )
}

export default Header
