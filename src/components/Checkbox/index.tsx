type CheckboxProps = {
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    readOnly?: boolean;
    children?: React.ReactNode;
};

function Checkbox(props: CheckboxProps) {
    return (
        <>
            <label className="b-checkbox checkbox is-large is-primary" style={{fontSize: 'var(--bulma-body-font-size)'}}>
                <input type="checkbox" checked={props.checked || false} disabled={props.readOnly ?? false} onChange={props.onChange} />
                <span className="check"></span>
                <span className="control-label">{props.children}</span>
            </label>
        </>
    );
}

export default Checkbox;
