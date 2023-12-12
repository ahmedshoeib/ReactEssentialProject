
// "children" will receive whichever content you pass between the opening and closing tags of your component.

export function TabButton(props) {
    return (
        <li> <button className={props.isSelected ? 'active' : undefined} onClick={props.onSelect}>{props.children}</button> </li>

    )
}

export function TabButton1({children, onSelect, isSelected}) {
    return (
        <li> <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button> </li>

    )
}

export function TabButton2({label, onSelect, isSelected}) {
    // function handleClick() { // can create the function as inner function as well
    //     console.log('Click');
    // }
    return (
        <li> <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{label}</button> </li>

    )
}

// function handleClick() { // will be used from App.jsx
//     console.log('Click');
// }
