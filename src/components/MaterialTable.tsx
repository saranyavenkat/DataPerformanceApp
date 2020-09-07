import React from 'react';
import { TableFooter, TablePagination, Table, TableBody, TableHead, TableRow, TableCell, Button } from '@material-ui/core';

const MaterialTable = (props:any) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    
    const handleChangePage = (event: any, newPage: any) => {
        setPage(newPage);
    };
 
    const handleChangeRowsPerPage = (event: any) => {
        setPage(0);
        setRowsPerPage(+event.target.value)
    };
    return (
        <Table stickyHeader aria-label="simple table">
                <TableHead>
                    <TableRow>
                    {props.columns.map((column:any)=>(
                        <TableCell>{column.title}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.testData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: any) => (
                        <TableRow key={row.id}>
                            {props.columns.map((column:any)=>
                           <TableCell>
                                {column.field === 'visit'?(
                                    <Button variant="outlined" color="primary" href={'/performance/'+row[column.field]}>
                                    Click to see the details of visit {row[column.field]}
                                  </Button>
                                ):(<span> {row[column.field]}</span>)
                                }
                            </TableCell>
                            )}
                           
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, 100]}
                            count={props.testData.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
    );
}

export default MaterialTable;
