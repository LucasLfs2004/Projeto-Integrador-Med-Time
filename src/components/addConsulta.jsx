import { useEffect, useState } from 'react';

const AddConsulta = () => {
  const [hospital, setHospital] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [localidade, setLocalidade] = useState('');
  const [lembretesConsultas, setLembretesConsultas] = useState([]);

  useEffect(() => {
    const consultasFromStorage = JSON.parse(
      localStorage.getItem('lembretesConsultas'),
    );
    if (consultasFromStorage) {
      setLembretesConsultas(consultasFromStorage);
    }
  }, []);

  const handleChangeHospital = e => {
    setHospital(e.target.value);
  };

  const handleChangeEspecialidade = e => {
    setEspecialidade(e.target.value);
  };

  const handleChangeData = e => {
    setData(e.target.value);
  };

  const handleChangeHorario = e => {
    setHorario(e.target.value);
  };

  const handleChangeLocalidade = e => {
    setLocalidade(e.target.value);
  };

  const handleCriarLembreteConsulta = () => {
    const novoLembreteConsulta = {
      hospital,
      especialidade,
      data,
      horario,
      localidade,
      tipo: 'consulta',
      active: true,
    };

    // Adicionando novo lembrete à lista de consultas
    const novaListaConsultas = [...lembretesConsultas, novoLembreteConsulta];
    setLembretesConsultas(novaListaConsultas);

    // Salvando lista de consultas no localStorage
    localStorage.setItem(
      'lembretesConsultas',
      JSON.stringify(novaListaConsultas),
    );

    // Limpar campos após a criação da consulta
    setHospital('');
    setEspecialidade('');
    setData('');
    setHorario('');
    setLocalidade('');
  };

  return (
    <div className='bg-[#FFF8EB]'>
      <h1 className='flex justify-start text-2xl font-medium mt-8 mb-4 ml-4 text-[#0F2737]'>
        Adicionar lembrete
      </h1>
      <div className='mb-4 flex flex-col items-center'>
        <img
          src='./assets/consulta-medica.png'
          alt='Consulta'
          className='mb-2 w-[8rem]'
        />
        <h1 className='font-medium text-[#0F2737]'>Consulta Médica</h1>
      </div>
      <div className='flex flex-col m-[2rem]'>
        <h1 className='flex justify-start text-sm ml-2'>Hospital:</h1>
        <input
          type='text'
          value={hospital}
          onChange={handleChangeHospital}
          className='mb-4 px-4 py-1 border-[#0F2737] border rounded-[4px] bg-[#FFF8EB]'
        />
        <h1 className='flex justify-start text-sm ml-2'>Especialidade:</h1>
        <input
          type='text'
          value={especialidade}
          onChange={handleChangeEspecialidade}
          className='mb-4 px-4 py-1 border-[#0F2737] border rounded-[4px] bg-[#FFF8EB]'
        />
        <div className='grid grid-cols-2 gap-2'>
          <div>
            <h1 className='flex justify-start text-sm ml-2'>Data:</h1>
            <input
              type='date'
              value={data}
              onChange={handleChangeData}
              className='mb-4 px-4 py-1 border-[#0F2737] border rounded-[4px] bg-[#FFF8EB] w-[100%]'
            />
          </div>
          <div>
            <h1 className='flex justify-start text-sm ml-2'>Horário:</h1>
            <input
              type='time'
              value={horario}
              onChange={handleChangeHorario}
              className='mb-4 px-4 py-1 border-[#0F2737] border rounded-[4px] bg-[#FFF8EB] w-[100%]'
            />
          </div>
        </div>
        <h1 className='flex justify-start text-sm ml-2'>Localidade:</h1>
        <textarea
          type='text'
          value={localidade}
          onChange={handleChangeLocalidade}
          className='mb-4 px-4 py-1 border-[#0F2737] border rounded-[4px] bg-[#FFF8EB]'
        />
        <div>
          <button
            onClick={handleCriarLembreteConsulta}
            className='bg-[#0F2737] text-[#FBA725] text-xl px-4 py-1 rounded-md w-[6.75rem] shadow-md'
          >
            Criar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddConsulta;
