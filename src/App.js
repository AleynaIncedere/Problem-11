import { CameraIcon, VideoCameraIcon } from '@heroicons/react/24/outline';


function BoxButton({ children, icon }) {
  return (
    <button
      type='button'
      className='relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
    >
      {icon}
      <span className='mt-2 block text-sm font-semibold text-gray-900'>
        {children}
      </span>
    </button>
  );
}

export default function App() {
  return (
    <div className='space-y-4 p-8 max-w-sm mx-auto'>
      <BoxButton icon={<CameraIcon className='mx-auto h-12 w-12 text-gray-400' />}>
        Yeni bir resim ekleyin
      </BoxButton>
      <BoxButton icon={<VideoCameraIcon className='mx-auto h-12 w-12 text-gray-400' />}>
        Yeni bir video oluşturun
      </BoxButton>
    </div>
  );
}
