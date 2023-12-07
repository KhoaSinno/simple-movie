import './App.scss';

function App() {
  return (
    <>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 font-medium mb-10">
        <span className='text-primary'>Home</span>
        <span className=''>Movies</span>
      </header>
      <section className='banner h-[500px] page-container'>
        <div className="w-full h-full rounded-lg relative">
          <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
          <img src="https://storage.googleapis.com/leep_app_website/2021/06/End-Game-01.jpg" alt=""
            className='h-full w-full object-cover rounded-lg'
          />
          <div className="absolute left-5 bottom-5 w-full text-white">
            <h2 className='font-bold text-4xl mb-8'>Advengers: Endgame</h2>
            <div className="flex items-center gap-x-3 mb-7">
              <span className='py-2 px-4 border border-white rounded-md'>Advengers</span>
              <span className='py-2 px-4 border border-white rounded-md'>Advengers</span>
              <span className='py-2 px-4 border border-white rounded-md'>Advengers</span>
            </div>
            <button className='font-medium px-6 py-3 bg-primary rounded-lg'>Watch Now!</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
