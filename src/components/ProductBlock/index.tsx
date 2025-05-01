import React from 'react';
import { Row, Col } from 'antd';
import { Fade } from 'react-awesome-reveal';
import { 
  ProductWrapper, 
  ProductTitle, 
  ProductDescription, 
  ProductGrid, 
  ProductCard, 
  ProductImage, 
  ProductCardTitle, 
  ProductCardDescription,
  ClientInfo,
  ClientLogo,
  ClientName,
  ProductTag,
  ViewDetailsButton
} from './styles';

interface Product {
  id: number;
  title: string;
  description: string;
  type: string;
  image: string;
  clientName: string;
  clientLogo?: string;
}

interface ProductBlockProps {
  title: string;
  subtitle: string;
  products: Product[];
  id?: string;
}

const ProductBlock: React.FC<ProductBlockProps> = ({ title, subtitle, products, id = "products" }) => {
  return (
    <ProductWrapper id={id}>
      <Fade direction="up">
        <ProductTitle>{title}</ProductTitle>
        <ProductDescription>{subtitle}</ProductDescription>
      </Fade>

      <ProductGrid>
        <Row gutter={[40, 40]}>
          {products.map((product, index) => (
            <Col xs={24} sm={12} md={8} key={product.id}>
              <Fade direction="up" delay={index * 100}>
                <ProductCard>
                  <ProductTag>{product.type}</ProductTag>
                  <ProductImage src={`/img/products/${product.image}`} alt={product.title} />
                  <ProductCardTitle>{product.title}</ProductCardTitle>
                  <ProductCardDescription>
                    {product.description}
                  </ProductCardDescription>
                  <ClientInfo>
                    {product.clientLogo ? (
                      <ClientLogo src={`/img/clients/${product.clientLogo}`} alt={product.clientName} />
                    ) : (
                      <ClientName>{product.clientName}</ClientName>
                    )}
                  </ClientInfo>
                  <ViewDetailsButton>View Details</ViewDetailsButton>
                </ProductCard>
              </Fade>
            </Col>
          ))}
        </Row>
      </ProductGrid>
    </ProductWrapper>
  );
};

export default ProductBlock;