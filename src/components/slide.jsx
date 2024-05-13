import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import AddMedicamento from './addMedicamento';
import AddConsulta from './addConsulta';
import AddAgendamento from './addAgendamento';
import AddExame from './addExame';

const Slide = () => {
  return (
    <Splide
      options={{
        arrows: false,
      }}
    >
      <SplideSlide>
        <AddMedicamento />
      </SplideSlide>
      <SplideSlide>
        <AddConsulta />
      </SplideSlide>
      <SplideSlide>
        <AddAgendamento />
      </SplideSlide>
      <SplideSlide>
        <AddExame />
      </SplideSlide>
    </Splide>
  );
};

export default Slide;
