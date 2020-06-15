import React, {Fragment} from 'react';
import Film from './Film.js';

const FilmRow = (props) => {
  const filmNodes = props.films.map((film) => {
    return <Film film={film} key={film.id} />
  });

  return (
    <Fragment>
    {filmNodes}
    </Fragment>
  )
}

export default FilmRow;
