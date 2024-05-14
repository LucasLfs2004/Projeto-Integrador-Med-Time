import moment from 'moment';

const ConsultaCard = ({ consulta }) => {
  return (
    <div className=' pb-[8px]'>
      <div className='flex flex-row items-center justify-between'>
        <div className='flex flex-row border-b-[1px] border-[#193750] px-[3px] items-center gap-x-[12px] pb-[3px]'>
          <img
            src='/assets/consulta-medica.png'
            alt=''
            className='w-[32px] h-[32px]'
          />
          <h1 className='text-[#FBA725] font-medium text-[16px]'>
            Consulta médica
          </h1>
        </div>
        <p className='text-[#193750] font-medium text-[16px]'>
          {moment(consulta.data).format('DD/MM/YYYY')}
        </p>
      </div>
      <div className=' w-full text-[#193750] font-medium text-[16px] flex flex-col items-start'>
        <div className='w-full flex flex-row justify-between'>
          <p>Data: {moment(consulta?.data_consulta).format('DD/MM/YYYY')}</p>
          <p>Horário: {consulta.horario}</p>
        </div>
        <p>Hospital: {consulta.hospital}</p>
        <p>Especialidade: {consulta.especialidade}</p>
        <p>Endereço: {consulta.localidade} </p>
      </div>
    </div>
  );
};

export default ConsultaCard;
