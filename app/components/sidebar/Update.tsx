import { updateList } from '../../data/updateList';

export const Update = () => {
  return (
    <div className='collapse collapse-arrow font-mono'>
      <input type='checkbox' />
      <div className='collapse-title'>
        <h4 className='text-base font-bold before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#f7ab0a]/80 relative inline-block'>
          <span className='relative text-white'>About to update</span>
        </h4>
      </div>
      <div className='collapse-content'>
        <ul className='text-gray-700'>
          {updateList.map((item) => (
            <li key={item.title}>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
