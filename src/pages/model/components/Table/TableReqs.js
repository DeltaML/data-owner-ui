import React from "react";
import {Table, TableBody, TableCell, TableHead, TableRow,} from "@material-ui/core";
import ModelWidget from "../../../../components/ModelWidget";

const TableReqsComponent = ({classes, ...props}) => {
    return (
        <div>
            <Table className="mb-0">
                <TableHead>
                    <TableRow>
                        <TableCell><b>Features</b></TableCell>
                        <TableCell><b>Description</b></TableCell>
                        <TableCell><b>Min Value</b></TableCell>
                        <TableCell><b>Max Value</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.keys(props.rowsData.features.desc).map(feature => (
                        <TableRow >
                            <TableCell>{feature}</TableCell>
                            <TableCell>{props.rowsData.features.desc[feature]}</TableCell>
                            <TableCell>{props.rowsData.features.range[0]}</TableCell>
                            <TableCell>{props.rowsData.features.range[1]}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default TableReqsComponent;
