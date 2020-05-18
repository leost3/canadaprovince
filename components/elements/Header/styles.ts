import styled from 'styled-components'

import { Header } from './Header'

const StyledHeader = styled(Header)`
    color:${({ theme }) => theme.color.primary};
    background:${({ theme }) => theme.color.background};
    padding:${({ theme }) => theme.padding.contentPadding};
    display:flex;
    justify-content:space-between;
    -webkit-box-shadow: 0px 3px 5px -1px rgba(196,172,196,1);
    -moz-box-shadow: 0px 3px 5px -1px rgba(196,172,196,1);
    box-shadow: 0px 3px 5px -1px rgba(196,172,196,1);
`

export { StyledHeader as Header }

