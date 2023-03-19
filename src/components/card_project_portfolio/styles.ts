import styled from "styled-components";

export const StyledCardProject = styled.div`
  width: 100%;
  flex-basis: 100%;
  @media (min-width: 1024px){
    flex-basis: 30%;
  }
  &:hover{
    .photo-frame{
      box-shadow: 0px 0px 34px 11px #AE7B18;
    }
  }
  h2{
    text-align: center;
    margin-bottom: 1rem;
  }
  .photo-frame {
    width: 100%;
    height: 10rem;
    transition: .5s;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
  }
`;
