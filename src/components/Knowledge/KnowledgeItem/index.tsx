import { ReactNode } from 'react';
import { Container } from './styles';

interface KnowledgeItemProps {
  title: string;
  icon: ReactNode;
}

function KnowledgeItem({ title, icon }: KnowledgeItemProps) {
  return (
    <Container>
      <p>{title}</p>
      {icon}
    </Container>
  );
}

export default KnowledgeItem;
