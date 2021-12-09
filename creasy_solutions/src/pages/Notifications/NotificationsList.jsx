import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

class NotificationsList extends React.Component {
    render() {
        return(
            <>
                <TableContainer component={Paper} elevation={3}
                    style={{
                        position: 'relative', 
                        top: '150px', 
                        width: '91%', 
                        marginLeft: 'auto', 
                        marginRight: 'auto',
                    }}
                >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{fontWeight: 'bold'}}> Id </TableCell>
                                <TableCell align="left" style={{fontWeight: 'bold'}}> Applicant </TableCell>
                                <TableCell align="left" style={{fontWeight: 'bold'}}> Project Name </TableCell>
                                <TableCell align="left" style={{fontWeight: 'bold'}}> Entry Date </TableCell>
                                <TableCell align="left" style={{fontWeight: 'bold'}}> Egress Date </TableCell>
                                <TableCell align="left" style={{fontWeight: 'bold'}}> State </TableCell>
                                <TableCell align="left" style={{fontWeight: 'bold'}}> Actions </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="left">{row.applicant}</TableCell>
                                    <TableCell style={{width: '500px'}} align="left">{row.projectName}</TableCell>
                                    <TableCell align="left">{row.entryDate}</TableCell>
                                    <TableCell align="left">{row.egressDate}</TableCell>
                                    <TableCell align="left">{row.state}</TableCell>
                                    <TableCell align="left">
                                        <Tooltip title="Edit">
                                            <IconButton onClick = {() => this.props.sModalEdit()} aria-label="edit" style={{background: '#67ADFC', marginRight: '8px'}}>
                                                <EditOutlinedIcon fontSize='small' style={{color: 'white'}}/>
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Delete">
                                            <IconButton aria-label="delete" style={{background: '#FC6767'}}>
                                                <DeleteOutlinedIcon fontSize='small' style={{color: 'white'}}/>
                                            </IconButton>
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </>
        )
    }
}

export default NotificationsList;