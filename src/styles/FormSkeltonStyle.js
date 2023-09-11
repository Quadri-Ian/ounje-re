import styled from 'styled-components';

export const SkeletonInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */
`;

export const SkeletonLabel = styled.div`
  width: 100px;
  height: 20px;
  background-color: #ccc;
  margin-bottom: 5px;
`;

export const SkeletonContent = styled.div`
  width: 200px;
  height: 20px;
  background-color: #f0f0f0;
`;
