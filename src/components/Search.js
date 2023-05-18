import '../styles/search.css';
import {Link} from "react-router-dom";
import {useState} from "react";

function Search() {
    const [sTerm, setSearchTerm] = useState("abba");

    function changeHandler(event){
        setSearchTerm(event.target.value)
    }

    return (
        <main>
            <h1>GitHub Profile Finder</h1>
            <div className="input-container">
                <input type='text' placeholder='Profile' onChange={changeHandler}/>
                <Link className="link" type='button' to='/profile' state={{searchTerm: sTerm}}>
                    Search
                </Link>
            </div>
        </main>
    );
}

export default Search;