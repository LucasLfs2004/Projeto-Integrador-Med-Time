import moment from 'moment';

const MedicamentoCard = ({ medicamento }) => {
  return (
    <div className='pb-[8px]'>
      <div className='flex flex-row items-center justify-between'>
        <div className='flex flex-row border-b-[1px] border-[#193750] px-[3px] items-center gap-x-[12px] pb-[3px]'>
          <img
            src='/assets/medicamento.png'
            alt=''
            className='w-[32px] h-[32px]'
          />
          <h1 className='text-[#FBA725] font-medium text-[16px]'>
            Medicamento
          </h1>
        </div>
        <p className='text-[#193750] font-medium text-[16px]'>
          {moment(medicamento.data).format('DD/MM/YYYY')}
        </p>
      </div>
      <div className=' w-full text-[#193750] font-medium text-[16px] flex flex-col items-start'>
        <p>Medicação: {medicamento.nome}</p>
        <p>Frequência: {medicamento.frequencia}h</p>
        <p>Duração: {medicamento.duracao} dias</p>
      </div>
    </div>
  );
};

export default MedicamentoCard;
