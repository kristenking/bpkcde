import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function PopUpCard({ selectedRow, setIsRowClicked }) {
  return (
    <Card>
      <CardHeader title="Card Header"></CardHeader>
      <CardContent>
        <Button onClick={() => setIsRowClicked(false)}>X</Button>
        <div>
          <strong>Opp Id:</strong> {selectedRow && selectedRow.oppId}
        </div>
        <div>
          <strong>Opp Name:</strong> {selectedRow && selectedRow.oppName}
        </div>
        <div>
          <strong>Sales Rep Name:</strong>{" "}
          {selectedRow && selectedRow.salesRepName}
        </div>
        <div>
          <strong>Amount:</strong> {selectedRow && selectedRow.amount}
        </div>
        <div>
          <strong>Product:</strong> {selectedRow && selectedRow.product}
        </div>
        <div>
          <strong>Stage:</strong> {selectedRow && selectedRow.stage}
        </div>
        <div>
          <strong>Rep Probrability:</strong>{" "}
          {selectedRow && selectedRow.repProbability}
        </div>
        <div>
          <strong>Probability History:</strong>
          {selectedRow.probabilityHistory.length &&
            selectedRow.probabilityHistory.map((prob) => {
              return (
                <div>
                  days ago: {prob.daysAgo}
                  <div>pilytixProb: {prob.pilytixProb}</div>
                  <div>repProb: {prob.repProb}</div>
                </div>
              );
            })}
        </div>
      </CardContent>
      <CardActions>
        <ExpandMoreIcon />
      </CardActions>
    </Card>
  );
}
