import styled from 'styled-components'

import { Logo } from './Logo'

const StyledLogo = styled(Logo)`
/* TODO - FIX typography */
color:${({ theme }) => theme.color.primary};
font-size:20px;
strong{
    font-weight:600;
    color:${({ theme }) => theme.color.secondary}
}
`

export { StyledLogo as Logo }
