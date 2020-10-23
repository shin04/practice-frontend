import React from "react";
import { Table } from "antd";

const DataTable = ({ data }) => {
    const columns = [
        {
            title: "Id",
            dataIndex: "Id",
            key: "id"
        },
        {
            title: "Title",
            dataIndex: "Title",
            key: "title"
        },
        {
            title: "Content",
            dataIndex: "Content",
            key: "content"
        }
    ]

    return (
        <Table dataSource={data} columns={columns} />
    );
}

export default DataTable;