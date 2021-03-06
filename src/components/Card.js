import styled from "styled-components/native";

export default styled.View`
  background-color: ${p => p.theme.background.primary};
  padding: 14px 15px;
  border-radius: 8px;
  shadow-color: black;
  shadow-radius: 22px;
  shadow-offset: 0px 10px;
  shadow-opacity: 0.09;
  ${props => !props.small && "width: 100%"};
`;
