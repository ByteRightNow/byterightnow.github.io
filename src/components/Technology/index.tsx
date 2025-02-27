import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { Icon } from '@iconify/react';
import { ContentWrapper, TechSection, CategoryTitle, TechStack, TechItem, IconWrapper, TechName } from "./styles";
import { TechnologyContent } from "./types";

// Tech stack icon mapping
const techIcons: { [key: string]: string } = {
  "React": "logos:react",
  "Next.js": "logos:nextjs-icon",
  "TypeScript": "logos:typescript-icon",
  "Redux": "logos:redux",
  "Node.js": "logos:nodejs-icon",
  "Express": "simple-icons:express",
  "Python": "logos:python",
  "Django": "logos:django-icon",
  "PostgreSQL": "logos:postgresql",
  "MongoDB": "logos:mongodb-icon",
  "Docker": "logos:docker-icon",
  "Kubernetes": "logos:kubernetes",
  "AWS": "logos:aws",
  "Flutter": "logos:flutter",
  "iOS": "logos:ios",
  "Android": "logos:android-icon",
};

interface TechnologyBlockProps {
  content: TechnologyContent;
}

export const TechnologyBlock = ({ content }: TechnologyBlockProps) => {
  return (
    <ContentWrapper>
      <Row justify="center" align="middle">
        <Col span={24}>
          <h6>{content.title}</h6>
          <p>{content.text}</p>
        </Col>
      </Row>
      {content.technologies.map((tech, index) => (
        <Fade direction="up" delay={index * 100} key={index}>
          <TechSection>
            <Row align="middle" gutter={[24, 24]}>
              <Col lg={6} md={8} sm={24} xs={24}>
                <CategoryTitle>{tech.category}</CategoryTitle>
              </Col>
              <Col lg={18} md={16} sm={24} xs={24}>
                <TechStack>
                  {tech.stack.map((item, i) => (
                    <TechItem key={i}>
                      <IconWrapper>
                        <Icon 
                          icon={techIcons[item] || 'mdi:code-tags'} 
                          width="40" 
                          height="40"
                        />
                      </IconWrapper>
                      <TechName>{item}</TechName>
                    </TechItem>
                  ))}
                </TechStack>
              </Col>
            </Row>
          </TechSection>
        </Fade>
      ))}
    </ContentWrapper>
  );
};