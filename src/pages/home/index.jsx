import moment from 'moment';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Header } from '../../components/header';
import HistoricoConsultas from '../../components/historicoConsultas';
import ProximaConsulta from '../../components/proximaConsulta';
import { TabBar } from '../../components/tabBar';

const Home = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState();
  const [lembretes, setLembretes] = useState();
  const [proximaConsulta, setProximaConsulta] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem('med_time_initialized')) {
      navigate('welcome');
    } else {
      setUserData(JSON.parse(localStorage.getItem('data_user')));
    }
  }, []);

  useEffect(() => {
    const medicamentos = JSON.parse(
      localStorage.getItem('lembretesMedicamento'),
    );
    const exames = JSON.parse(localStorage.getItem('lembretesExames'));
    const consultas = JSON.parse(localStorage.getItem('lembretesConsultas'));
    const agendamentos = JSON.parse(
      localStorage.getItem('lembretesAgendamentos'),
    );

    console.log({ medicamentos, exames, consultas, agendamentos });

    const dataAtual = moment.utc();
    let objetoMaisProximo = null;
    let menorDiferenca = Infinity;

    consultas &&
      consultas.length > 0 &&
      consultas.forEach(consulta => {
        const dataObjeto = moment.utc(
          `${consulta.data}T${consulta.horario}:00Z`,
        );
        const diferenca = Math.abs(dataObjeto.diff(dataAtual));

        if (diferenca < menorDiferenca) {
          menorDiferenca = diferenca;
          objetoMaisProximo = consulta;
        }
      });
    setProximaConsulta(objetoMaisProximo);

    const lembretesIntercalados = [];

    // Comprimento máximo que um dos arrays tem
    const maxLength = Math.max(
      agendamentos?.length,
      exames?.length,
      consultas?.length,
      medicamentos?.length,
    );

    // Iterar sobre todos os índices
    for (let i = 0; i < maxLength; i++) {
      // Adiciona um item de cada array, se existir
      if (agendamentos[i]) lembretesIntercalados.push(agendamentos[i]);
      if (exames[i]) lembretesIntercalados.push(exames[i]);
      if (consultas[i]) lembretesIntercalados.push(consultas[i]);
      if (medicamentos[i]) lembretesIntercalados.push(medicamentos[i]);
    }

    setLembretes(lembretesIntercalados);
    console.log(lembretesIntercalados);
  }, [localStorage]);

  return (
    <main className='container w-[100vw] min-h-[100vh] h-auto pb-[80px]'>
      <Header />
      <h1 className='font-medium text-[#0F2737] text-[20px]'>
        Olá {userData?.name}, deseja adicionar um lembrete?
      </h1>
      <div className='w-full flex flex-col items-center'>
        <div className='bg-[#193750] rounded-[18px] w-[132px] h-[132px] flex flex-col items-center justify-center mb-[6px] mt-[16px]'>
          <img src='/assets/medicamento.png' alt='medicamento' />
        </div>

        <Link
          to={'/add-reminder'}
          className='bg-[#193750] rounded-[6px] w-[132px] h-[32px] flex flex-col items-center justify-center'
        >
          <p className='text-[#FBA725] font-medium text-[14px]'>Adicionar</p>
        </Link>
      </div>
      {proximaConsulta && <ProximaConsulta proximaConsulta={proximaConsulta} />}

      <HistoricoConsultas lembretes={lembretes} />
      <TabBar page={'home'} />
    </main>
  );
};

export default Home;
