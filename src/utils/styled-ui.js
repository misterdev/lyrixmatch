
import styled from 'styled-components'
import { TableHead as MuiTableHead } from '@material-ui/core'

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #999;
    padding: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
`
const Card = styled.div`
    padding: 40px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const TableHead = styled(MuiTableHead)`
    background-color: #bbb;
`
export {
    Wrapper,
    Card,
    TableHead
}