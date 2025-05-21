type SquareProps = {
    children?: React.ReactNode;
    onClick?: () => void;
}

function Square(props: SquareProps) {
    const { children, onClick } = props;
    return (
        <div
        onClick={onClick}
        style={{
            width: '50px',
            height: '50px',
            backgroundColor: 'white',
        }}
        >
            {children}
        </div>
    )
}

export default Square;