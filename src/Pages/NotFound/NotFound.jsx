import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import notFound from '../../assets/image/NotFound.jpg'

const NotFound = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-[#20c99618]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={notFound} className="lg:max-w-xl rounded-lg shadow-2xl" />

          <div className='mr-10'>
            <h1 className="text-6xl font-bold"><span className='text-[#20C997]'>Oops,</span> page not found</h1>
            <p className="py-6 text-xl">Sorry, the page you are looking for could not be found</p>
            <Link className="btn btn-outline border-[#1eb889] text-[#20C997]"><FaArrowLeft className='mr-2' /> Back To Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;