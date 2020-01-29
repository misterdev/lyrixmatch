import styled from "styled-components";
import { TableHead as MuiTableHead } from "@material-ui/core";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #999;
  padding: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
`;
const Card = styled.div`
  padding: 40px;
  border-radius: 8px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 5px 15px 0px #333;
`;
const TableHead = styled(MuiTableHead)`
  background-color: #bbb;
`;
export { Wrapper, Card, TableHead };
