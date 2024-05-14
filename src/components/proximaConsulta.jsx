import moment from 'moment';

const ProximaConsulta = ({ proximaConsulta }) => {
  return (
    <div className='flex flex-col text-[#0F2737] mt-[24px] mx-[24px] gap-y-[12px]'>
      <div className='flex flex-row w-full items-center justify-between'>
        <div className='text-[#0F2737] flex flex-row gap-x-[8px]'>
          <img src='/assets/clockIcon.svg' className='w-[32px]' alt='' />
          <h1 className='font-medium text-[22px]'>Próxima consulta</h1>
        </div>
        <p className='text-[#193750] font-medium text-[12px]'>
          {moment(proximaConsulta.data).format('DD/MM/YYYY')} -{' '}
          {proximaConsulta.horario}
        </p>
      </div>
      <div className='flex flex-row gap-x-[16px]'>
        <img
          src='/assets/consulta-medica.png'
          className='w-[64px] h-[64px]'
          alt=''
        />
        <p className='font-medium text-lg text-left '>
          {proximaConsulta.especialidade} -{proximaConsulta.hospital} <br />
          {proximaConsulta.localidade}
        </p>
      </div>
    </div>
  );
};

export default ProximaConsulta;
