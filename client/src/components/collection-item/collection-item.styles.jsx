import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
   width: 22vw;
   display: flex;
   flex-direction: column;
   height: 350px;
   align-items: center;
   position: relative;


`;

export const BackgroundImage = styled.div`
   width: 100%;
   height: 95%;
   background-size: cover;
   background-position: center;
   margin-bottom: 5px;
   background-image: ${({ imageUrl }) => `url(${ imageUrl })`}
`;

export const AddButton = styled(CustomButton)`
    width: 45%;
    opacity: 0.1;
    position: absolute; 
    top: 255px;
    display: none;
    ${CollectionItemContainer}:hover & {
        display: flex;
        opacity: 0.85;
    }
`;

export const CollectionFooterContainer = styled.div`
   width: 100%;
   height: 5%;
   display: flex;
   justify-content: space-between;
   font-size: 18px;
`;

export const NameContainer = styled.span`
   width: 92%;
   margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`