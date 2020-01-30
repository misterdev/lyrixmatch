import styled from "styled-components";
import { TableCell, TableContainer } from "@material-ui/core";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 7vh 10vw;
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

const TableWrapper = styled(TableContainer)`
  max-height: 40vh;
`;
const TableHeadCell = styled(TableCell)`
  background-color: #bbb !important;
`;
export { Wrapper, Card, TableWrapper, TableHeadCell };
