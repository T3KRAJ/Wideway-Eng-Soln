import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
    background: ${({primary}) => (primary ? '#F26A2E' : '#1F8AC0')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
    color: #fff;
    font-size: ${({ big }) => (big ? '20px' : '16px')}
    outline: none;
    border: none;
    min-width: 100px;
    cursor: pointer;
    text-decoration: none;
    transform: 0.3s !important;
    border-radius: ${({ round }) => (round ? '50px' : 'none')};
    &:hover {
        background ${({ primary }) => (primary ? '#1F8AC0' : '#F26A2E')};
        transform: translateY(-1px);
    }
`