import styled from '@emotion/styled';

const Main = styled.main`
  font-weight: var(--font-weight);
  font-family: var(--font-family);
  font-size: var(--sm-font-size);
  line-height: var(--line-height);
  color: var(--main-text-color);
  height: 100vh;
  width: 100vw;
  max-width: var(--max-width);
  max-height: var(--max-height);
  overflow: hidden;

  display: grid;
  grid-template-rows: minmax(auto, var(--upper-quadrant)) 1fr;
  grid-template-columns: 100%;
`;

export default Main;
