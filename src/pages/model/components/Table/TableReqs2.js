import React from "react";
import {Table, TableBody, TableCell, TableHead, TableRow,} from "@material-ui/core";


const TableReqs2Component = ({classes, ...props}) => {
    return (
        <Table className="mb-0">
            <TableHead>
                <TableRow>
                    <TableCell><b>Target</b></TableCell>
                    <TableCell><b>Description</b></TableCell>
                    <TableCell><b>Min Value</b></TableCell>
                    <TableCell><b>Max Value</b></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow >
                    <TableCell>y</TableCell>
                    <TableCell>{props.rowsData.target.desc}</TableCell>
                    <TableCell>{props.rowsData.target.range[0]}</TableCell>
                    <TableCell>{props.rowsData.target.range[1]}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};

export default TableReqs2Component;
