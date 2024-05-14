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
                return <MedicamentoCard key={key} medicamento={item} />;
              case 'exame':
                return <ExameCard key={key} exame={item} />;
              case 'agendamento':
                return <AgendarConsultaCard key={key} agendamento={item} />;
              case 'consulta':
                return <ConsultaCard key={key} consulta={item} />;
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
