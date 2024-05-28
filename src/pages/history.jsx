import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import AgendarConsultaCard from '../components/agendarConsultaCard';
import ButtonMarine from '../components/buttonAzulMarinho';
import ConsultaCard from '../components/consultaCard';
import ExameCard from '../components/exameCard';
import { Header } from '../components/header';
import MedicamentoCard from '../components/medicacaoCard';
import { TabBar } from '../components/tabBar';

const History = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState();
  const [lembretes, setLembretes] = useState();
  const [medicamentos, setMedicamentos] = useState(null);
  const [exames, setExames] = useState(null);
  const [consultas, setConsultas] = useState(null);
  const [agendamentos, setAgendamentos] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem('med_time_initialized')) {
      navigate('/welcome');
    } else {
      setUserData(JSON.parse(localStorage.getItem('data_user')));
    }
  }, []);

  const getLembretes = () => {
    const medicamentos = JSON.parse(
      localStorage.getItem('lembretesMedicamento'),
    );
    const exames = JSON.parse(localStorage.getItem('lembretesExames'));
    const consultas = JSON.parse(localStorage.getItem('lembretesConsultas'));
    const agendamentos = JSON.parse(
      localStorage.getItem('lembretesAgendamentos'),
    );

    const lembretesIntercalados = [];

    // Comprimento máximo que um dos arrays tem
    const maxLength = Math.max(
      agendamentos?.length > 0 ? agendamentos?.length : 0,
      exames?.length ? exames?.length : 0,
      consultas?.length ? consultas?.length : 0,
      medicamentos?.length ? medicamentos?.length : 0,
    );

    for (let i = 0; i < maxLength; i++) {
      // Adiciona um item de cada array, se existir
      if (agendamentos?.length > i && agendamentos?.length > 0)
        lembretesIntercalados.push(agendamentos[i]);
      if (exames?.length > i && exames?.length > 0)
        lembretesIntercalados.push(exames[i]);
      if (consultas?.length > i && consultas?.length >= 0)
        lembretesIntercalados.push(consultas[i]);
      if (medicamentos?.length > i && medicamentos?.length >= 0)
        lembretesIntercalados.push(medicamentos[i]);
    }

    lembretesIntercalados.sort((a, b) => new Date(b.data) - new Date(a.data));

    setLembretes(
      lembretesIntercalados.filter(objeto => objeto.active === false),
    );
    setAgendamentos(agendamentos);
    setConsultas(consultas);
    setExames(exames);
    setMedicamentos(medicamentos);
  };

  useEffect(() => {
    getLembretes();
  }, []);

  const deleteReminder = item => {
    if (item.tipo === 'medicamento') {
      medicamentos &&
        localStorage.setItem(
          'lembretesMedicamento',
          JSON.stringify(medicamentos.filter(objeto => objeto.id !== item.id)),
        );
    } else if (item.tipo === 'consulta') {
      consultas &&
        localStorage.setItem(
          'lembretesConsultas',
          JSON.stringify(consultas.filter(objeto => objeto.id !== item.id)),
        );
    } else if (item.tipo === 'exame') {
      exames &&
        localStorage.setItem(
          'lembretesExames',
          JSON.stringify(consultas.filter(objeto => objeto.id !== item.id)),
        );
    } else if (item.tipo === 'agendamento') {
      agendamentos &&
        localStorage.setItem(
          'lembretesAgendamentos',
          JSON.stringify(consultas.filter(objeto => objeto.id !== item.id)),
        );
    }
    getLembretes();
  };

  return (
    <main className='container w-[100vw] min-h-[100vh] h-auto pb-[80px]'>
      <Header />
      <section className='mx-[16px] lg:w-[50%] lg:mx-[auto]'>
        <div className='flex flex-row items-center gap-x-[14px] mb-[24px]'>
          <img
            src='/assets/clockIcon.svg'
            className='ml-[8px] w-[32px] h-[32px]'
            alt=''
          />
          <h1 className='text-[24px] text-[#0f2737] font-medium'>
            Histórico de Lembretes
          </h1>
        </div>

        <div className='flex flex-col gap-y-[16px]'>
          {lembretes?.length > 0 ? (
            lembretes.map((item, key) => {
              if (!item.active) {
                switch (item?.tipo) {
                  case 'medicamento':
                    return (
                      <div
                        key={key}
                        className='border-b-[1px] border-[#FBA725] pb-[8px]'
                      >
                        <MedicamentoCard medicamento={item} />
                        <div className='flex gap-x-[24px]'>
                          <ButtonMarine
                            message={'Excluir'}
                            onPress={() => deleteReminder(item)}
                          />
                        </div>
                      </div>
                    );
                  case 'exame':
                    return (
                      <div
                        key={key}
                        className='border-b-[1px] border-[#FBA725] pb-[8px]'
                      >
                        <ExameCard exame={item} />;
                        <div className='flex gap-x-[24px]'>
                          <ButtonMarine
                            message={'Excluir'}
                            onPress={() => deleteReminder(item)}
                          />
                        </div>
                      </div>
                    );
                  case 'agendamento':
                    return (
                      <div
                        key={key}
                        className='border-b-[1px] border-[#FBA725] pb-[8px]'
                      >
                        <AgendarConsultaCard agendamento={item} />
                        <div className='flex gap-x-[24px]'>
                          <ButtonMarine
                            message={'Excluir'}
                            onPress={() => deleteReminder(item)}
                          />
                        </div>
                      </div>
                    );
                  case 'consulta':
                    return (
                      <div
                        key={key}
                        className='border-b-[1px] border-[#FBA725] pb-[8px]'
                      >
                        <ConsultaCard consulta={item} />
                        <div className='flex gap-x-[24px]'>
                          <ButtonMarine
                            message={'Excluir'}
                            onPress={() => deleteReminder(item)}
                          />
                        </div>
                      </div>
                    );
                }
              }
            })
          ) : (
            <h1 className='text-lg font-semibold'>Nenhum lembrete salvo</h1>
          )}
        </div>
      </section>
      <TabBar page={'history'} />
    </main>
  );
};

export default History;
