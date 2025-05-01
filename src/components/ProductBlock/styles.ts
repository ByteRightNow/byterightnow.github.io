import styled from 'styled-components';

export const ProductWrapper = styled.div`
  padding: 5rem 0;
  width: 100%;
`;

export const ProductTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #333;
  font-weight: 700;
`;

export const ProductDescription = styled.p`
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  color: #666;
`;

export const ProductGrid = styled.div`
  margin-top: 2rem;
`;

export const ProductCard = styled.div`
  border-radius: 12px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
  transition: all 0.3s ease;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(23, 170, 156, 0.15);
  }
`;

export const ProductTag = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #17AA9C;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  z-index: 1;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  transition: transform 0.6s ease;
  
  ${ProductCard}:hover & {
    transform: scale(1.05);
  }
`;

export const ProductCardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  padding: 1.5rem 1.5rem 0.75rem;
  color: #333;
`;

export const ProductCardDescription = styled.p`
  font-size: 0.95rem;
  color: #666;
  padding: 0 1.5rem;
  margin-bottom: 1.5rem;
  flex: 1;
`;

export const ClientInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  margin-bottom: 1.5rem;
  border-top: 1px solid #f0f0f0;
  padding-top: 1.5rem;
`;

export const ClientLogo = styled.img`
  height: 30px;
  max-width: 120px;
  object-fit: contain;
`;

export const ClientName = styled.span`
  font-size: 0.9rem;
  color: #888;
  font-weight: 500;
`;

export const ViewDetailsButton = styled.button`
  background: #17AA9C;
  color: white;
  border: none;
  margin: 0 1.5rem 1.5rem;
  padding: 0.8rem 0;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #2E8089;
    box-shadow: 0 5px 15px rgba(23, 170, 156, 0.2);
  }
`;