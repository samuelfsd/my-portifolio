import { ReactNode } from 'react';

import { Container } from './styles';

interface SectionTitleProps {
  title: string | ReactNode;
  description?: string | ReactNode;
}

function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <Container>
      <h1>#{title}</h1>
      {description && <h3>{description}</h3>}
    </Container>
  );
}

export default SectionTitle;
