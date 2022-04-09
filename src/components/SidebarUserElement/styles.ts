import styled from 'styled-components';

export const UserData = styled.div<{ sidebarIsOpen: boolean }>`
  height: 100px;
  padding: 0.2rem 0 0.2rem 1.2rem;
  margin-bottom: 0.5rem;

  align-items: center;
  display: flex;

  img {
    width: 50px;
    height: 50px;
    margin-right: 10px;

    border-radius: 10px;
  }

  h1 {
    display: ${(props) => (props.sidebarIsOpen ? "block" : "none")};
    font-weight: normal;
    color: #fff;
  }
`;