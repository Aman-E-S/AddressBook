//import ListGroup from './components/ListGroup';

import { useState } from "react";
import Alert from "./components/Alert";
import ColorButton from "./components/ColorButton";

function App() {
    /*let items = [
        'New York',
        'Los Angeles',
        'Chicago',
        'Houston',
        'London',
        'Paris'
    ];

    const handleSelectItem = (item: string) => {
        console.log(item);
    }*/

    const [alertVisible, setAlertVisibility] = useState(false);

    return (
        <div>
            {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>}
            <ColorButton onClick={() => setAlertVisibility(true)} text="Click This!" />
        </div>
    );
}

export default App;