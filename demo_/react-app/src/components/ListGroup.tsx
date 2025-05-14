//import { MouseEvent } from "react";

import { useState } from "react";

interface Props {                 //interface for properties
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
    //let items = [
    //    'New York',
    //    'Los Angeles',
    //    'Chicago',
    //    'Houston',
    //    'London',
    //    'Paris'
    //];

    //let selectedIndex = 0;

    //Hook - state hook(taps into built-in features in react)
    const [selectedIndex, setSelectedIndex] = useState(-1);  //component state
    //items = [];
    //if (items.length === 0) {
    //    return (
    //        <>
    //            <h1>List</h1>
    //            <p>No items to display</p>
    //        </>
    //    );
    //}
    //const message = items.length === 0 ? 'No item to display' : null;   // 1st way of conditional rendering
    //2nd way of conditional rendering - usong functions
    //const message = () => {
    //    return items.length === 0 ? 'No item to display' : null;
    //}

    //event handler
    //const handleClick = (event: MouseEvent) => console.log(event);


    return (
        <>
            <h1>{heading}</h1>
            <ul className="list-group">
                {/*{items.length === 0 ? <p>No item to display</p> : null}*/}
                {/*{message}*/}

                {/*the null part can be removed using logical and like given below*/}
                {items.length === 0 && <p>No item to display</p>}

                {/*<li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>*/}
                {items.map((item, index) =>
                    <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                        key={item}
                        onClick={() => {
                            setSelectedIndex(index);
                            onSelectItem(item);
                        }}
                        >
                            {item}
                        </li>)
                }
            </ul>
        </>
    );
}

export default ListGroup;