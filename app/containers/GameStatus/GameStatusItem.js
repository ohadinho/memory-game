import styled, { css } from 'styled-components';

const GameStatusItem = styled.div`
  color: red;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    
    ${props =>
  props.status &&
  css`
      margin-top: 2rem;`}
`;

export default GameStatusItem;
