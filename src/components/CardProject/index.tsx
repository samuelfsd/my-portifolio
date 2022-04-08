import Link from 'next/link';
import { Container } from './styles';

interface CardProjectProps {
  title: string;
  type: string;
  slug: string;
  imgUrl: string;
}

function CardProject({ title, type, slug, imgUrl }: CardProjectProps) {
  return (
    <Container imgUrl={imgUrl}>
      <Link href={`/projetos/${slug}`}>
        <a>
          <div className="overlay" />
          <section>
            <h1>{title}</h1>
            <h2>{type}</h2>
          </section>
        </a>
      </Link>
    </Container>
  );
}

export default CardProject;
