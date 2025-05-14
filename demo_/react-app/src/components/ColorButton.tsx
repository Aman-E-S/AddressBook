
interface Props {
    text: string;
    onClick: () => void;
    color?: string;
}

const ColorButton = ({ text, onClick, color='primary' }: Props) => {
    return (
        <>
            <button type="button" className={"btn btn-" + color} onClick={onClick}>{text}</button>
        </>
    )
}

export default ColorButton