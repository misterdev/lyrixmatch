import React from "react";
import { Paper } from "@material-ui/core";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";
import { Wrapper, Card, TableWrapper, TableHeadCell } from "../components/styled";

const Leaderboard = props => {
  let scores = props.scores || [];
  if (scores) scores = scores.sort((a, b) => b.score - a.score);

  return (
    <Wrapper>
      <Card>
        <h3>🏆 LEADERBOARD 🏆</h3>
        <br />
        <TableWrapper component={Paper}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {scores.length === 0 ? (
                  <TableCell align="center">
                    IF YOU PLAY NOW YOU WILL BE #1!
                  </TableCell>
                ) : (
                  <>
                    <TableHeadCell align="center">#</TableHeadCell>
                    <TableHeadCell align="center">PLAYER</TableHeadCell>
                    <TableHeadCell align="center">SCORE</TableHeadCell>
                    <TableHeadCell align="center">DATE</TableHeadCell>
                  </>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {scores.map((s, key) => (
                <TableRow key={key}>
                  <TableCell align="center">{key}</TableCell>
                  <TableCell align="center">{s.userId}</TableCell>
                  <TableCell align="center">{s.score}</TableCell>
                  <TableCell align="center">{s.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableWrapper>
      </Card>
    </Wrapper>
  );
};

export default Leaderboard;
