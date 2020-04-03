import React from "react";
import Aux from "../hoc/Aux";
import styled from "styled-components";

const Main = styled.div`
  margin-top: 96px;
`;

const layout = props => (
  <Aux>
    {/* <div>Toolbar,SideDrawer,BackDrop</div> */}
    <Main>{props.children}</Main>
  </Aux>
);
export default layout;
