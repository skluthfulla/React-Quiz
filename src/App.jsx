const App = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="container rounded-xl overflow-hidden">
        <div className="bg-red-500 py-16 text-center">
          <p className="font-poppins text-sm text-white opacity-40 mb-4">
            <span>1</span> ⎯ <span>20</span>
          </p>
          <h1 className="font-playfair text-5xl">Question</h1>
        </div>
        <div className="grid bg-black text-white gird-rows-2 grid-cols-2 gap-3 py-8 px-16 uppercase font-poppins">
          <button className="transition-all duration-200 rounded-lg text-md p-2 capitalize border border-white hover:bg-white hover:text-black active:scale-95">
            A
          </button>
          <button className="transition-all duration-200 rounded-lg text-md p-2 capitalize border border-white hover:bg-white hover:text-black active:scale-95">
            A
          </button>
          <button className="transition-all duration-200 rounded-lg text-md p-2 capitalize border border-white hover:bg-white hover:text-black active:scale-95">
            A
          </button>
          <button className="transition-all duration-200 rounded-lg text-md p-2 capitalize border border-white hover:bg-white hover:text-black active:scale-95">
            A
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
