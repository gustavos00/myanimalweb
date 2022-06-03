import styled from "styled-components";

export const Container = styled.ul`
  margin-top: 10px;
  max-height: 135px;
  overflow-y: auto;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 12px;


    & + li {
      margin-top: 15px;
    }
  }
`;

export const FileInfo = styled.div`
  width: 100%;
  padding: .5rem;
  
  display: flex;
  align-items: center;

  border-radius: 5px;
  background: #fff;

  div {
    display: flex;
    flex-direction: column;

    span {
      margin-top: 5px;

      font-size: 10px;
      font-weight: 300;

      button {
        margin-left: 5px;

        font-size: 10px;
      font-weight: 300;
        color: #e57878;

        border: 0;
        background: transparent;

        cursor: pointer;
      }
    }
  }
`;

interface PreviewProps {
  src?: string;
}

export const Preview = styled.div<PreviewProps>`
  width: 36px;
  height: 36px;
  border-radius: 5px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  margin-right: 10px;
`;
