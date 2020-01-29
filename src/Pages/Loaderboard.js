import React from "react";
import { Paper } from "@material-ui/core";
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";

import { Wrapper, Card, TableHead } from "../components/styled";

const Leaderboard = props => {
  let scores = props.scores || [];
  if (scores) scores = scores.sort((a, b) => b.score - a.score);

  return (
    <Wrapper>
      <Card>
        <h3>🏆 LEADERBOARD 🏆</h3>
        <br />
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                {scores.length === 0 ? (
                  <TableCell align="center">
                    IF YOU PLAY NOW YOU WILL BE #1!
                  </TableCell>
                ) : (
                  <>
                    <TableCell align="center">PLAYER</TableCell>
                    <TableCell align="center">SCORE</TableCell>
                    <TableCell align="center">DATE</TableCell>
                  </>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {scores.map((s, key) => (
                <TableRow key={key}>
                  <TableCell align="center">{s.userId}</TableCell>
                  <TableCell align="center">{s.score}</TableCell>
                  <TableCell align="center">{s.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Wrapper>
  );
};

export default Leaderboard;
