import Paper from '@material-ui/core/Paper'
import styled from 'styled-components'

export const Card = styled(Paper)`
    margin:${({ theme }) => theme.margin.cardMargin} ;
`

export const Box = styled.div`
    padding: 20px calc(${({ theme }) => theme.padding.widthPadding} - ${({ theme }) => theme.margin.cardMargin});
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 30%;
`
