import React, { useState } from "react";
import { Button, Input, Paper } from "@material-ui/core";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from "@material-ui/core";

import { Wrapper, Card, TableHeadCell, TableWrapper } from "../components/styled";

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
          <TableWrapper component={Paper}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  {user.scores.length === 0 ? (
                    <TableHeadCell align="center">
                      PLAY THE GAME TO SEE YOUR SCORES HERE!
                    </TableHeadCell>
                  ) : (
                    <>
                      <TableHeadCell align="center">SCORE</TableHeadCell>
                      <TableHeadCell align="center">DATE</TableHeadCell>
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
          </TableWrapper>
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

export default Profile;
