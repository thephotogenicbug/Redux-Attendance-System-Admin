
import React from 'react'
import styled from "styled-components";
import AttendaceContent from '../Content/AttendaceContent';
import SideBar from '../SideBar/SideBar';

const Container = styled.div`
  display: flex;
  height: 97vh;
  margin-top: 10px;
  background: linear-gradient(to bottom right, white 0%, #ffdfd1 70%);
  border-radius: 2rem;
  margin-bottom: 6rem;
`;

const AttendaceContainer = () => {
    return (
        <Container>
          <AttendaceContent />
        </Container>
    )
}

export default AttendaceContainer
