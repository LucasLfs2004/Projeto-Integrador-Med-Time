import AgendarConsultaCard from './agendarConsultaCard';
import ConsultaCard from './consultaCard';
import ExameCard from './exameCard';
import MedicamentoCard from './medicacaoCard';

const HistoricoConsultas = ({ lembretes }) => {
  return (
    <div className='flex flex-col text-[#0F2737] mt-[24px] mx-[24px] gap-y-[12px]'>
      <div className='flex flex-row w-full items-center justify-between'>
        <div className='text-[#0F2737] flex flex-row gap-x-[8px]'>
          <img src='/assets/historyIcon.svg' className='w-[32px]' alt='' />
          <h1 className='font-medium text-[22px]'>Lembretes</h1>
        </div>
      </div>

      {lembretes?.length > 0 ? (
        lembretes.map((item, key) => {
          if (key < 3) {
            switch (item.tipo) {
              case 'medicamento':
                return (
                  <div className='border-b-[1px] border-[#FBA725]'>
                    <MedicamentoCard key={key} medicamento={item} />
                  </div>
                );
              case 'exame':
                return (
                  <div className='border-b-[1px] border-[#FBA725]'>
                    <ExameCard key={key} exame={item} />
                  </div>
                );
              case 'agendamento':
                return (
                  <div className='border-b-[1px] border-[#FBA725]'>
                    <AgendarConsultaCard key={key} agendamento={item} />
                  </div>
                );
              case 'consulta':
                return (
                  <div className='border-b-[1px] border-[#FBA725]'>
                    <ConsultaCard key={key} consulta={item} />
                  </div>
                );
            }
          }
        })
      ) : (
        <h1 className='text-lg font-semibold'>Nenhum lembrete salvo</h1>
      )}
    </div>
  );
};

export default HistoricoConsultas;
