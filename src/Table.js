import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import * as opportunities from "./opportunities.json";
import PopUpCard from "./PopUpCard";

export default function BasicTable() {
  /**
   * A basic table to display all non-nested information from opportunities.json
   */
  const data = opportunities.default;
  const [selectedRow, setSelectedRow] = React.useState(false);
  const [isRowClicked, setIsRowClicked] = React.useState(false);

  return (
    <>
      <TableContainer sx={{ borderRadius: 2, boxShadow: 4 }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#0F3D3E" }}>
            <TableRow>
              <TableCell sx={{ color: "#F1F1F1" }} align="left">
                Opp Name
              </TableCell>
              <TableCell sx={{ color: "#F1F1F1" }} align="left">
                Opp Stage
              </TableCell>
              <TableCell sx={{ color: "#F1F1F1" }} align="right">
                Rep Probability
              </TableCell>
              <TableCell sx={{ color: "#F1F1F1" }} align="right">
                PX Probability
              </TableCell>
              <TableCell sx={{ color: "#F1F1F1" }} align="left">
                PX Tier
              </TableCell>
              <TableCell sx={{ color: "#F1F1F1" }} align="right">
                Amount
              </TableCell>
              <TableCell sx={{ color: "#F1F1F1" }} align="left">
                Product
              </TableCell>
              <TableCell sx={{ color: "#F1F1F1" }} align="left">
                Sales Rep
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                onClick={(event) => {
                  setIsRowClicked(true);
                  setSelectedRow(row);
                }}
                key={row.oppId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{ backgroundColor: "#E2DCC8" }}
                  component="th"
                  scope="row"
                >
                  {row.oppName}
                </TableCell>
                <TableCell align="left">{row.stage}</TableCell>
                <TableCell align="right">{row.repProbability}</TableCell>
                <TableCell align="right">{row.pilytixProbability}</TableCell>
                <TableCell align="left">{row.pilytixTier}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="left">{row.product}</TableCell>
                <TableCell align="left">{row.salesRepName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {isRowClicked && (
        <PopUpCard
          selectedRow={selectedRow}
          setIsRowClicked={setIsRowClicked}
        />
      )}
    </>
  );
}
