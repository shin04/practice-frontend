import React from "react";
import { Table } from "antd";

const DataTable = ({data}) => {
    const columns = [
        {
            title: "Id",
            dataIndex: "Id",
        },
        {
            title: "Title",
            dataIndex: "Title"
        },
        {
            title: "Content",
            dataIndex: "Content"
        }
    ]
    
    return (
       <Table dataSource = {data} columns = {columns}/>
    );
}

export default DataTable;