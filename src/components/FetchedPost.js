import React, {useEffect, useState} from "react";

export default () => {
    const [dogData, setDogData] = useState(false);

    const handleFetch = async () => {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const json = await response.json();
        setDogData(json.message);
    }

    return (
        <div>
            <h1>Fetch posts</h1>
            <button onClick={handleFetch}>Show me the dog</button>
            {dogData ? <img src={dogData}/> : <p>Click the btn to show dog</p>}
        </div>
    )
}c