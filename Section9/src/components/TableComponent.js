import React,{useState} from "react";

import TableHeader from "./TableHeader";

import TableItem from "./TableItem";


export default function TableComponent(props) {








    return (
        <table className="result">
            <TableHeader></TableHeader>
            <tbody>
                {props.savingsData.length>0&&props.savingsData.map(data=>(<TableItem item={data} key={data.year}></TableItem>))}
            </tbody>
        </table>
    );
}