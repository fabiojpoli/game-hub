import useGenres from '../hooks/useGenres';

const GenreList = () => {
   const { data, error, isLoading } = useGenres();

   return (
      <ul>
         {isLoading && <li>Loading genres...</li>}
         {error && <li>Error: {error}</li>}
         {!isLoading &&
            !error &&
            data.map((genre) => <li key={genre.id}>{genre.name}</li>)}
      </ul>
   );
};

export default GenreList;
