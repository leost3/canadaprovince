import styled from 'styled-components'

import { Header } from './Header'


const StyledHeader = styled(Header)`
    color:${({ theme }) => theme.color.primary};
    background:${({ theme }) => theme.color.background};
    padding:${({ theme }) => theme.padding.headerPadding} ${({ theme }) => theme.padding.widthPadding};
    display:flex;
    justify-content:space-between;
`

export { StyledHeader as Header }

