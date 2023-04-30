import styled from 'styled-components'

export const ContainerHeader = styled.header`
    background:green;

`
export const Nav = styled.nav`
    display:flex;
    flex-flow: row nowrap;
    align-items:center;
    justify-content:space-between;
`
export const Ul = styled.ul`
    display:flex;
    flex-flow: row nowrap;
    align-items:center;
    justify-content:flex-start;
    gap: 20px;
    text-decoration:none;
    list-style-type:none;
    & > li a {
        text-decoration:none;
    }
`
