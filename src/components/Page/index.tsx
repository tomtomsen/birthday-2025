import { Container, Section } from "react-bulma-components";
import HeaderBar from "../HeaderBar";

type PageProps = {
    children?: React.ReactNode;
    backUrl?: string;
    isChild?: boolean;
}

function Page(props: PageProps) {
    const { children } = props;
    return (
        <>
            <HeaderBar isChild={props.isChild} />

            <Section>
                <Container>
                    {children}
                </Container>
            </Section>
        </>
    );
}

export default Page;