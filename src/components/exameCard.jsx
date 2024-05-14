const ExameCard = ({ exame }) => {
  return (
    <div className='pb-[8px]'>
      <div className='flex flex-row items-center justify-between'>
        <div className='flex flex-row border-b-[1px] border-[#193750] px-[3px] items-center gap-x-[12px] pb-[3px]'>
          <img
            src='/assets/registro-medico.png'
            alt=''
            className='w-[32px] h-[32px]'
          />
          <h1 className='text-[#FBA725] font-medium text-[16px]'>
            Buscar exame
          </h1>
        </div>
        <p className='text-[#193750] font-medium text-[16px]'>01/03/2024</p>
      </div>
      <div className=' w-full text-[#193750] font-medium text-[16px] flex flex-col items-start'>
        <p>Prazo: {exame.prazo}</p>
        <p>Hospital / Laboratório: {exame.hospital}</p>
        <p>Exame: {exame.exame}</p>
        <p>Endereço: {exame.localidade}</p>
      </div>
    </div>
  );
};

export default ExameCard;
