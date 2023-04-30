import styled from 'styled-components'

export const ContainerHeader = styled.header`
    background:${props => props.theme.colors.bg_nav};
    padding:0 30px;
    height:50px;
    display:flex;
    flex-flow: column nowrap;
    align-items:center;
    justify-content:center;
`
export const Nav = styled.nav`
    display:flex;
    flex-flow: row nowrap;
    align-items:center;
    justify-content:space-between;
    width:100%;
`
export const Ul = styled.ul`
    margin:0;
    padding:0;
    display:flex;
    flex-flow: row nowrap;
    align-items:center;
    justify-content:flex-start;
    gap: 20px;
    text-decoration:none;
    list-style-type:none;
    & > li a {
        text-decoration:none;
        color: ${props => props.theme.colors.text_nav}
    }
`
