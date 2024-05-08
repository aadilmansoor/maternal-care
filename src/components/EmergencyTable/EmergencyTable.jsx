import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
} from "@mui/material";
import "./EmergencyTable.css";
const EmergencyTable = ({ allContacts }) => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <div className="mx-4">
      <h1 className="emergency-heading">Emergency Support</h1>
      {allContacts.length === 0 ? (
        <p>No data available</p>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 550 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>SI No</StyledTableCell>
                <StyledTableCell align="right">Service</StyledTableCell>
                <StyledTableCell align="right">Location</StyledTableCell>
                <StyledTableCell align="right">Phone number</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allContacts.map((contact,index) => {
                return (
                  <StyledTableRow key={contact._id}>
                    <StyledTableCell component="th" scope="row">
                      {index+1}
                    </StyledTableCell>
                    <StyledTableCell align="right">{contact.emergency_support}</StyledTableCell>
                    <StyledTableCell align="right">{contact.location}</StyledTableCell>
                    <StyledTableCell align="right">{contact.phonenumber}</StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default EmergencyTable;
