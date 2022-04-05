import { ReactNode } from 'react';
import { ItemContainer } from './styles';

interface ExperienceItemProps {
  yearOfExperience: string | ReactNode;
  office: string | ReactNode;
  description?: string | ReactNode;
}

function ExperienceItem({
  yearOfExperience,
  office,
  description
}: ExperienceItemProps) {
  return (
    <ItemContainer>
      <div>
        <h1>{yearOfExperience}</h1>
        <h2>{office}</h2>
        <p>{description}</p>
      </div>
    </ItemContainer>
  );
}

export default ExperienceItem;
