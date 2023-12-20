import styled from 'styled-components';


export const FooterStyled = styled.footer`

    margin-top: 2.5rem;
    position: sticky;
    width: 100%;
    height: 6.25rem; /* Assuming rem(100) is equivalent to 100px */
    background-color: var(--dark-blue);
    border-top: 1px solid var(--dark-gray); /* Assuming rem(1) is equivalent to 1px */

`

export const InnerContainer= styled.div`
    display: flex;
    justify-content: stretch;
    align-items: center;
    color: white;
    padding-top: 1.25rem; /* Assuming rem(10) is equivalent to 10px */
    padding-bottom: 2.5rem; /* Assuming rem(20) is equivalent to 20px */
`

export const StyledLink = styled.a `

    margin-top: 1.25rem; /* Assuming theme.spacing.md is equivalent to 1.25rem */
`
