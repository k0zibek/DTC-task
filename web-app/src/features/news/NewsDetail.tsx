import { useParams } from 'react-router-dom';

export const NewsDetail = () => {
  const { id } = useParams();

  return (
    <div>
      {`Подробности новости ID: ${id}`}
    </div>
  );
};
