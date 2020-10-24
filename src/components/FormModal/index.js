import React, { useState } from "react";
import { Modal, Button } from 'antd';
import PostForm from "../PostForm/index"

const FormModal = () => {
    const [isOpen, setOpen] = useState(false);
    const openmodal = () => {
        setOpen(true);
    }
    const closemodal = () => {
        setOpen(false);
    }
    return (
        <>
            <Button type="primary" onClick={openmodal}>
                Create New Post
            </Button>
            <Modal
                title="Create New Post"
                visible={isOpen}
                footer={[]}
                onCancel={closemodal}
            >
                <PostForm closemodal={closemodal} />
            </Modal>
        </>
    );
}

export default FormModal;