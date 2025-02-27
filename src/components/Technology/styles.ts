import styled from "styled-components";

export const ContentWrapper = styled("div")`
  padding: 5rem 0;

  h6 {
    font-size: 2.575rem;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.1rem;
    text-align: center;
    margin-bottom: 3rem;
  }
`;

export const TechSection = styled("div")`
  background: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.0);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;


`;

export const CategoryTitle = styled("h4")`
  font-size: 1.5rem;
  margin: 0;
  color: #17AA9C;
  font-weight: 600;
`;

export const TechStack = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: flex-start;
`;

export const TechItem = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 12px;
  background: #f8f9fa;
  width: 120px; // Increased width
  min-height: 120px; // Changed to min-height
  height: auto; // Allow height to grow
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    background: #fff;
    box-shadow: 0 12px 20px rgba(23, 170, 156, 0.1);

    span {
      color: #17AA9C;
    }
  }
`;

export const IconWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  transition: transform 0.3s ease;
  flex-shrink: 0; // Prevent icon from shrinking
`;

export const TechName = styled("span")`
  font-size: 0.85rem;
  font-weight: 500;
  text-align: center;
  color: #4a4a4a;
  transition: color 0.3s ease;
  word-break: break-word; // Allow word breaks
  display: -webkit-box;
  -webkit-line-clamp: 2; // Limit to 2 lines
  -webkit-box-orient: vertical;
  overflow: hidden;
  width: 100%; // Full width for text
`;