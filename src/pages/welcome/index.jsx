import { useState } from 'react';
import { useNavigate } from 'react-router';

const Welcome = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleNavigate = (saveData = false) => {
    if (saveData) {
      localStorage.setItem('data_user', JSON.stringify({ name, age }));
    }
    localStorage.setItem('med_time_initialized', true);
    navigate('/');
  };

  return (
    <section className='pt-16 w-[100vw] h-[100vh] bg-[#FFF8EB] flex flex-col items-center'>
      <h1 className='text-[#193750] text-3xl font-medium'>MED TIME</h1>
      <img
        src='/assets/logo.png'
        alt=''
        className='w-[196px] h-[196px] mt-[12px] mb-[48px]'
      />
      <p className='text-[#193750] font-medium text-2xl w-[80%]'>
        Bem vindo ao seu app de lembretes e avisos focado na saúde!
        <br />
        <br />
        Por favor, informe seus dados no formulário abaixo:
      </p>
      <div className='flex flex-col w-full items-center gap-y-[24px] mt-[48px]'>
        <input
          type='text'
          placeholder='Nome'
          value={name}
          onChange={e => setName(e.target.value)}
          className='bg-[transparent] border-2 border-[#193750] rounded w-[80%] h-[36px] pl-[8px] pr-[8px]'
        />
        <input
          type='text'
          placeholder='Idade'
          value={age}
          onChange={e => setAge(e.target.value)}
          className='bg-[transparent] border-2 border-[#193750] rounded w-[80%] h-[36px] pl-[8px] pr-[8px]'
        />
        <button
          onClick={() => handleNavigate(true)}
          className='w-[80%] h-[52px] bg-[#193750] rounded-[14px]'
        >
          <p className='text-[#FFF8EB] font-semibold text-[20px]'>Continuar</p>
        </button>
        <button onClick={handleNavigate}>
          <p className='text-[#f00] text-[14px]'>
            Não quero fornecer informações
          </p>
        </button>
      </div>
    </section>
  );
};

export default Welcome;
