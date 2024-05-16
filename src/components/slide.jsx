import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import AddAgendamento from './addAgendamento';
import AddConsulta from './addConsulta';
import AddExame from './addExame';
import AddMedicamento from './addMedicamento';

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
