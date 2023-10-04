import { Button, Modal } from 'react-bootstrap';
import s from './style.module.scss'

export default function SuccessPopup(props) {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                {/* <Modal.Header closeButton> */}
                {/* <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title> */}
                {/* </Modal.Header> */}
                <div className={s.popup}>
                    <div className={s.logo}>
                        <img src="/logo.png" />
                        <div>Vinayaga<br />Engineering</div>
                    </div>
                    <h4 className='text-center'>Thanks for reaching us. We will contact you soon.</h4>

                    <Button variant='dark' onClick={props.onHide}>Close</Button>
                </div>
            </Modal.Body>
        </Modal>
    );
}
