import styled from 'styled-components';

export const PageBtn = styled.button`
  display: block;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  background: #0d1117;
  font-size: 20px;
  border: none;
  border-radius: 4px;
  color: white;
  min-width: 80px;
  padding: 10px;
  &:hover {
    background: orangered;
    color: white;
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
