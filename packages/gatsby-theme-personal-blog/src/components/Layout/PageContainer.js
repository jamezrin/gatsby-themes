import styled from '@emotion/styled';

const PageContainer = styled.div`
  background: ${props => props.theme.palette.white};
  height: 100vh;
  position: absolute;
  right: 0;
  overflow-y: auto;
  top: 0;
  width: calc(100% - ${props => props.theme.dimensions.sidebar.width});
`;

export default PageContainer;
