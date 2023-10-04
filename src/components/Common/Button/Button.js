import { Button, Spinner } from 'react-bootstrap';
import s from './Button.module.scss';

import cx from "classname";

export default function CommonButton(props) {
    const { children, className, isLoading, variant = "primary", ...rest } = props;
    return (
        <Button {...rest} disabled={isLoading} className={cx(className, "gap-2 d-flex align-items-center", s.button, s[variant])} >
            {isLoading ? <Spinner animation="border" role="status" size="sm">
                <span className="visually-hidden">Loading...</span>
            </Spinner> : ""}
            {children}
        </Button>
    )
}
