export const ButtonBege = ({ message, action }) => {
  return (
    <button className='bg-[#FFF8EB] rounded-[6px]' onClick={() => action()}>
      <p>{message}</p>
    </button>
  );
};
