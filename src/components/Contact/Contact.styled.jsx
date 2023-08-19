import styled from 'styled-components';

export const DeleteButton = styled.button`
  cursor: pointer;
  min-width: 70px;
  ${'' /* height: 22px; */}
`;
export const List = styled.ul`
  padding-left: 0px;
  width: 350px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  li:nth-child(even) {
    background-color: #f0f0f0;
  }
  border: 1px solid #c8cbcc;
  border-radius: 5px;
  padding-top: 5px;
  padding-right: 5px;
  padding-left: 5px;
`;
export const ListItem = styled.li`
  margin-bottom: 5px;
  list-style: none;
`;
export const P = styled.p`
  margin: 0px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 5px;
`;
