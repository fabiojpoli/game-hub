import useGenres from '../hooks/useGenres';

const GenreList = () => {
   const { genres, error, isLoading } = useGenres();

   return (
      <ul>
         {isLoading && <li>Loading genres...</li>}
         {error && <li>Error: {error}</li>}
         {!isLoading &&
            !error &&
            genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
      </ul>
   );
};

export default GenreList;
