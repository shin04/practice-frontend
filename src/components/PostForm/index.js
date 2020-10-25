import React, { useState } from "react";
import { Form, Input, Button } from 'antd';

const PostForm = ({ closemodal }) => {
    const [newPost, setNewPost] = useState({ Title: "", Content: "" });

    const titleChange = (e) => {
        const newpost = {
            ...newPost,
            Title: e.target.value
        }
        setNewPost(newpost);
    }
    const contentChange = (e) => {
        const newpost = {
            ...newPost,
            Content: e.target.value
        }
        setNewPost(newpost);
    }

    const onFinish = () => {
        setNewPost();
        closemodal();
    }
    const onFinishFailed = (err) => {
        console.log(err)
    }

    async function postData() {
        if (newPost.Title !== "" && newPost.Content !== "") {
            await fetch("/posts", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(
                    newPost
                )
            })
                .then((res) => {
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    return (
        <Form name="post" onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <Form.Item
                label="Title"
                name="title"
                rules={[
                    {
                        required: true,
                        message: "Please input title"
                    }
                ]}
            >
                <Input onChange={titleChange} />
            </Form.Item>
            <Form.Item
                label="Content"
                name="content"
                rules={[
                    {
                        required: true,
                        message: "Please input content"
                    }
                ]}
            >
                <Input onChange={contentChange} />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" onClick={postData}>
                    SUBMIT
                </Button>
            </Form.Item>
        </Form>
    );
}

export default PostForm;