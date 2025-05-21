import { Navbar } from "react-bulma-components";
import { ROUTES } from "../../routes";

type HeaderBarProps = {
  isChild?: boolean;
}

function HeaderBar(props: HeaderBarProps) {
  return (
    <Navbar color="primary" active={false}>
        <Navbar.Brand>
            {props.isChild && (
                <Navbar.Item className="has-text-white" renderAs="a" href={ROUTES.dashboard}>
                    &lt;
                </Navbar.Item>
            )}
            <Navbar.Item className="has-text-white">
                Happy Birthday Cennet!
            </Navbar.Item>
        </Navbar.Brand>
    </Navbar>
  );
}

export default HeaderBar;