const ButtonMarine = ({ message, onPress }) => {
  return (
    <button
      onClick={onPress}
      className='h-[28px] w-[108px] rounded-[6px] bg-[#0F2737] border-none text-[#FBA725] flex items-center justify-center'
    >
      {message}
    </button>
  );
};

export default ButtonMarine;
