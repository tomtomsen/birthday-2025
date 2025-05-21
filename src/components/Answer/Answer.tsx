import { useState } from "react";
import { Form, Icon } from "react-bulma-components";

type AnswerProps = {
    answer: string;
    onSuccess?: () => void;
}

function Answer(props: AnswerProps) {

    const [valid, setValid] = useState(false);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (props.answer === event.target.value) {
            setValid(true)
            if (props.onSuccess) {
                props.onSuccess();
            }
        }
    }

    return (
        <>
            <Form.Field>
                <Form.Control>
                    <Form.Input placeholder="Antwort" onChange={onChange} size="large" renderAs="input" readOnly={valid} />
                    <Icon align="right" color={valid ? "success" : "dark"}>
                        <i>✓</i>
                    </Icon>
                </Form.Control>
            </Form.Field>
        </>
    );
}

export default Answer;
