import moment from 'moment';

const AgendarConsultaCard = ({ agendamento }) => {
  return (
    <div className='pb-[8px]'>
      <div className='flex flex-row items-center justify-between'>
        <div className='flex flex-row border-b-[1px] border-[#193750] px-[3px] items-center gap-x-[12px] pb-[3px]'>
          <img
            src='/assets/agendamento-on-line.png'
            alt=''
            className='w-[32px] h-[32px]'
          />
          <h1 className='text-[#FBA725] font-medium text-[16px]'>
            Agendar Consulta
          </h1>
        </div>
        <p className='text-[#193750] font-medium text-[16px]'>
          {moment(agendamento.data).format('DD/MM/YYYY')}
        </p>
      </div>
      <div className=' w-full text-[#193750] font-medium text-[16px] flex flex-col items-start'>
        <p>Especialidade: {agendamento.especialidade} </p>
        <p>Urgência da consulta: {agendamento.urgencia} </p>
      </div>
    </div>
  );
};

export default AgendarConsultaCard;
