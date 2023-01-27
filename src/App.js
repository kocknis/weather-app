import './App.css';

function App() {
  return (
    <div className="App w-screen h-screen bg-black flex justify-center items-center overflow-hidden">
      <div className="flex flex-col bg-[#212121] w-[90%] h-[90%] sm:w-1/2 sm:h-[500px] rounded-[15px] p-5">
            <div className="w-full flex flex-col sm:flex-row justify-center items-center mt-[50px]">
                <input className="h-[56px] w-full sm:w-3/5 bg-[#212121] font-bold text-[20px] border-0 border-b border-b-[#16a864] text-[#16a864] rounded-[5px] sm:ml-7"
                    type="text" dir="rtl" placeholder="نام شهر را به انگلیسی وارد کنید..." id="cityInput"/>
                <input
                    className="h-[56px] w-full sm:w-1/5  bg-[#16a864] font-bold text-[#f8f8ff] text-[24px] border-0 rounded-[5px] cursor-pointer mt-[30px] sm:mt-0"
                    type="submit" value="ثبت" id="add"/>
            </div>


            <div className="w-full flex flex-col justify-center items-center mt-[100px]">
                <h2 className="text-[30px] text-[#16a864] py-2" id="cityoutput"></h2>
                <p className="text-[20px] text-[#16a864] py-2" id="description"></p>
                <p className="text-[20px] text-[#16a864] py-2" id="temp"></p>
                <p className="text-[20px] text-[#16a864] py-2" id="wind"></p>
            </div>
        </div>
    </div>
  );
}

export default App;
