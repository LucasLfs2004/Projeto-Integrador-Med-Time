import { useState, useEffect } from 'react';

const AddAgendamento = () => {
  const [especialidade, setEspecialidade] = useState('');
  const [urgencia, setUrgencia] = useState('');
  const [lembretesAgendamentos, setLembretesAgendamentos] = useState([]);

  useEffect(() => {
    const agendamentosFromStorage = JSON.parse(
      localStorage.getItem('lembretesAgendamentos'),
    );
    if (agendamentosFromStorage) {
      setLembretesAgendamentos(agendamentosFromStorage);
    }
  }, []);

  const handleChangeEspecialidade = e => {
    setEspecialidade(e.target.value);
  };

  const handleChangeUrgencia = e => {
    setUrgencia(e.target.value);
  };

  const handleCriarLembreteAgendamento = () => {
    const novoLembreteAgendamento = {
      especialidade,
      urgencia,
    };

    // Adicionando novo lembrete à lista de agendamentos
    const novaListaAgendamentos = [
      ...lembretesAgendamentos,
      novoLembreteAgendamento,
    ];
    setLembretesAgendamentos(novaListaAgendamentos);

    // Salvando lista de agendamentos no localStorage
    localStorage.setItem(
      'lembretesAgendamentos',
      JSON.stringify(novaListaAgendamentos),
    );

    // Limpar campos após a criação do agendamento
    setEspecialidade('');
    setUrgencia('');
  };

  return (
    <div className='bg-[#FFF8EB]'>
      <h1 className='flex justify-start text-2xl font-medium mt-8 mb-4 ml-4'>
        Adicionar lembrete
      </h1>
      <div className='mb-4 flex flex-col items-center'>
        <img
          src='./assets/agendamento-on-line.png'
          alt='Medicina'
          className='mb-2 w-[8rem]'
        />
        <h1 className='font-medium'>Agendar consulta</h1>
      </div>
      <div className='flex flex-col m-[2rem]'>
        <h1 className='flex justify-start text-sm ml-2'>Especialidade:</h1>
        <input
          type='text'
          value={especialidade}
          onChange={handleChangeEspecialidade}
          className='mb-4 px-4 py-1 border-[#0F2737] border rounded-[4px] bg-[#FFF8EB]'
        />
        <h1 className='flex justify-start text-sm ml-2'>Urgência:</h1>
        <input
          type='text'
          value={urgencia}
          onChange={handleChangeUrgencia}
          className='mb-4 px-4 py-1 border-[#0F2737] border rounded-[4px] bg-[#FFF8EB]'
        />
        <div>
          <button
            onClick={handleCriarLembreteAgendamento}
            className='bg-[#0F2737] text-[#FBA725] text-xl px-4 py-1 rounded-md w-[6.75rem] shadow-md'
          >
            Criar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAgendamento;