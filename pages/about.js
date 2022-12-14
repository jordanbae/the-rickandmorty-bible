export default function About() {
  return (
    <>
      <div className="about-bg">

        <div className='about-text-cont'>
        <img src="../logo.png" width='360' height='125' className='about-img'></img>
            <p className="about-text-1">
                Made by: <a href='https://github.com/jordanbae' rel="noreferrer" target='_blank' >@jordanbae</a>
            </p>
            <p className="about-text-2">
                Api by: <a href='https://rickandmortyapi.com/' rel="noreferrer" target='_blank' >Rick and Morty API</a>
            </p>
        </div>
      </div>
    </>
  );
}
