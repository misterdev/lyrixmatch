import React, { useState } from "react";
import { Button, Input, Paper } from "@material-ui/core";
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";

import { Wrapper, Card, TableHead } from "../components/styled";

const Profile = props => {
  const { user, login, logout } = props;
  const [userName, setUsername] = useState("");

  const onInputChage = e => setUsername(e.target.value);

  return (
    <Wrapper>
      {user ? (
        <Card>
          <h3>
            ⭐ Welcome <b>{user.name}</b> ⭐
          </h3>
          <br />
          <Button variant="contained" color="primary" onClick={() => logout()}>
            LOGOUT
          </Button>
          <br />
          <br />
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  {user.scores.length === 0 ? (
                    <TableCell align="center">
                      PLAY THE GAME TO SEE YOUR SCORES HERE!
                    </TableCell>
                  ) : (
                    <>
                      <TableCell align="center">SCORE</TableCell>
                      <TableCell align="center">DATE</TableCell>
                    </>
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {user.scores.map((s, key) => (
                  <TableRow key={key}>
                    <TableCell align="center">{s.score}</TableCell>
                    <TableCell align="center">{s.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      ) : (
        <Card>
          <h2>What's your name?</h2>
          <form>
            <Input
              value={userName}
              onChange={onInputChage}
              placeholder="Elon, Mark, Steve,..."
            >
              {" "}
            </Input>
            <Button
              variant="contained"
              color="primary"
              onClick={() => login(userName)}
            >
              LOGIN
            </Button>
          </form>
        </Card>
      )}
    </Wrapper>
  );
};

export default Profile
