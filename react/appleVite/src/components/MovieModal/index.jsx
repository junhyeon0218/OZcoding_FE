import { imageBasePath } from "../../../constant";

const MovieModal = ({
  backdrop_path,
  title,
  overview,
  name,
  relea_date,
  first_air_date,
  vote_average,
  setModalOpen,
}) => {
  return (
    <div className='presentation' role='presentation'>
      <div className='wrapper-modal'>
        <div className='modal'>
          <span onClick={() => setModalOpen(false)} className='modal-close'>
            X
          </span>

          <img
            className='modal__poster-img'
            src={`${imageBasePath}${backdrop_path}`}
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
