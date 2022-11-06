import {useState} from 'react';

function ContainerSearch(){
    const [text, setText] = useState('');
    const handleInputChange = ({target}) => {
        setText(target.value)
    }
    const handleSubmit =  (e) => {
        e.preventDefault()
        console.log(text)
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="search" autoComplete="off" value={text} onChange={handleInputChange}></input>
            <button type="submit">Search</button>
        </form>
        
    ) }
export default ContainerSearch; 