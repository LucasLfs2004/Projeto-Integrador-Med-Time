import moment from 'moment';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddMedicamento = () => {
  const [medicamentoNome, setMedicamentoNome] = useState('');
  const [medicamentoFrequencia, setMedicamentoFrequencia] = useState('');
  const [medicamentoDuracao, setMedicamentoDuracao] = useState('');
  const [lembretesMedicamento, setLembretesMedicamento] = useState([]);

  useEffect(() => {
    const medicamentoFromStorage = JSON.parse(
      localStorage.getItem('lembretesMedicamento'),
    );
    if (medicamentoFromStorage) {
      setLembretesMedicamento(medicamentoFromStorage);
    }
  }, []);

  const handleChangeMedicamentoNome = e => {
    setMedicamentoNome(e.target.value);
  };

  const handleChangeMedicamentoFrequencia = e => {
    setMedicamentoFrequencia(e.target.value);
  };

  const handleChangeMedicamentoDuracao = e => {
    setMedicamentoDuracao(e.target.value);
  };

  const handleCriarLembreteMedicamento = () => {
    const novoLembreteMedicamento = {
      nome: medicamentoNome,
      frequencia: medicamentoFrequencia,
      duracao: medicamentoDuracao,
      data: moment().format('YYYY-MM-DD'),
      tipo: 'medicamento',
      active: true,
      id: uuidv4(),
    };

    console.log(novoLembreteMedicamento);

    // Adicionando novo lembrete à lista de lembretes
    const novaListaLembretesMedicamento = [
      ...lembretesMedicamento,
      novoLembreteMedicamento,
    ];
    setLembretesMedicamento(novaListaLembretesMedicamento);

    // Salvando lista de lembretes no localStorage
    localStorage.setItem(
      'lembretesMedicamento',
      JSON.stringify(novaListaLembretesMedicamento),
    );

    // Limpar campos após a criação do lembrete
    setMedicamentoNome('');
    setMedicamentoFrequencia('');
    setMedicamentoDuracao('');
  };

  return (
    <div className='bg-[#FFF8EB]'>
      <h1 className='flex justify-start text-2xl font-medium mt-8 mb-4 ml-4 text-[#0F2737]'>
        Adicionar lembrete
      </h1>
      <div className='mb-4 flex flex-col items-center'>
        <img
          src='./assets/medicina.png'
          alt='Medicina'
          className='mb-2 w-[8rem]'
        />
        <h1 className='font-medium text-[#0F2737]'>Medicamento</h1>
      </div>
      <div className='flex flex-col m-[2rem]'>
        <h1 className='flex justify-start text-sm ml-2 '>Medicamento:</h1>
        <input
          type='text'
          value={medicamentoNome}
          onChange={handleChangeMedicamentoNome}
          className='mb-4 px-4 py-1 border-[#0F2737] border rounded-[4px] bg-[#FFF8EB]'
        />
        <h1 className='flex justify-start text-sm ml-2 '>Frequência:</h1>
        <input
          type='number'
          value={medicamentoFrequencia}
          onChange={handleChangeMedicamentoFrequencia}
          className='mb-4 px-4 py-1 border-[#0F2737] border rounded-[4px] bg-[#FFF8EB]'
        />
        <h1 className='flex justify-start text-sm ml-2 '>Duração (dias):</h1>
        <input
          type='number'
          value={medicamentoDuracao}
          onChange={handleChangeMedicamentoDuracao}
          className='mb-4 px-4 py-1 border-[#0F2737] border rounded-[4px] bg-[#FFF8EB]'
        />
        <div>
          <button
            onClick={handleCriarLembreteMedicamento}
            className='bg-[#0F2737] text-[#FBA725] text-xl px-4 py-1 rounded-md w-[6.75rem] shadow-md'
          >
            Criar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMedicamento;
