import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const EntryPage = styled.div`
display: flex;
align-items: center; 
background-color: #fbfbfb;
flex-direction: column;
min-height: 100vh;
`;

export const PageHeader = styled(Link)`
font-size: 2rem; 
font-weight: 600; 
color: inherit;
`;
