import moment from 'moment';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddExame = () => {
  const [hospital, setHospital] = useState('');
  const [exame, setExame] = useState('');
  const [localidade, setLocalidade] = useState('');
  const [prazo, setPrazo] = useState('');
  const [lembretesExames, setLembretesExames] = useState([]);

  useEffect(() => {
    const examesFromStorage = JSON.parse(
      localStorage.getItem('lembretesExames'),
    );
    if (examesFromStorage) {
      setLembretesExames(examesFromStorage);
    }
  }, []);

  const handleChangeHospital = e => {
    setHospital(e.target.value);
  };

  const handleChangeExame = e => {
    setExame(e.target.value);
  };

  const handleChangeLocalidade = e => {
    setLocalidade(e.target.value);
  };

  const handleChangePrazo = e => {
    setPrazo(e.target.value);
  };

  const handleCriarLembreteExame = () => {
    const novoLembreteExame = {
      hospital,
      exame,
      localidade,
      prazo,
      data: moment().format('YYYY-MM-DD'),
      tipo: 'exame',
      active: true,
      id: uuidv4(),
    };

    // Adicionando novo lembrete à lista de exames
    const novaListaExames = [...lembretesExames, novoLembreteExame];
    setLembretesExames(novaListaExames);

    // Salvando lista de exames no localStorage
    localStorage.setItem('lembretesExames', JSON.stringify(novaListaExames));

    // Limpar campos após a criação do exame
    setHospital('');
    setExame('');
    setLocalidade('');
    setPrazo('');
  };

  return (
    <div className='bg-[#FFF8EB] lg:w-[40%] lg:mx-[auto]'>
      <h1 className='flex justify-start text-2xl font-medium mt-8 mb-4 ml-4 text-[#0F2737]'>
        Adicionar lembrete
      </h1>
      <div className='mb-4 flex flex-col items-center'>
        <img
          src='./assets/registro-medico.png'
          alt='Medicina'
          className='mb-2 w-[8rem]'
        />
        <h1 className='font-medium text-[#0F2737]'>Buscar exame</h1>
      </div>
      <div className='flex flex-col m-[2rem]'>
        <h1 className='flex justify-start text-sm ml-2'>Hospital:</h1>
        <input
          type='text'
          value={hospital}
          onChange={handleChangeHospital}
          className='mb-4 px-4 py-1 border-[#0F2737] border rounded-[4px] bg-[#FFF8EB]'
        />
        <h1 className='flex justify-start text-sm ml-2'>Exame:</h1>
        <input
          type='text'
          value={exame}
          onChange={handleChangeExame}
          className='mb-4 px-4 py-1 border-[#0F2737] border rounded-[4px] bg-[#FFF8EB]'
        />
        <h1 className='flex justify-start text-sm ml-2'>Localidade:</h1>
        <textarea
          type='text'
          value={localidade}
          onChange={handleChangeLocalidade}
          className='mb-4 px-4 py-1 border-[#0F2737] border rounded-[4px] bg-[#FFF8EB]'
        />
        <h1 className='flex justify-start text-sm ml-2'>Prazo:</h1>
        <input
          type='date'
          value={prazo}
          onChange={handleChangePrazo}
          className='mb-4 px-4 py-1 border-[#0F2737] border rounded-[4px] bg-[#FFF8EB]'
        />
        <div>
          <button
            onClick={handleCriarLembreteExame}
            className='bg-[#0F2737] text-[#FBA725] text-xl px-4 py-1 rounded-md w-[6.75rem] shadow-md'
          >
            Criar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddExame;
