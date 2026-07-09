let weatherInput = document.

let weatherData
async function a(){

     weatherData = await fetch('https://api.weatherapi.com/v1/forecast.json?key=238627eb91a54e85adf104216260607&q=itarsi&days=6&aqi=yes&alerts=no')
     let res = await weatherData.json()
     console.log(res);
}

a()

          // <div class="flex p-2 items-center gap-2 w-full grow">
          //   <!-- left part -->
          //   <div class="w-6/9 h-full flex flex-col gap-1">
          //     <!-- part - 1 -->
          //     <div class="h-3/6 flex flex-col gap-1">
          //       <div>
          //         <h1 class="text-xl text-shadow-lg">Somal Wada Khurd</h1>
          //         <h3 class="text-[12px] text-shadow-lg text-gray-800">
          //           Change of rain 0%
          //         </h3>
          //       </div>
          //       <div class="grow flex items-start justify-between mt-5">
          //         <div class="flex items-start">
          //           <div class="flex items-start">
          //             <img
          //               class="h-25 -mt-2"
          //               src="//cdn.weatherapi.com/weather/64x64/day/113.png"
          //               alt="weather-img"
          //             />
          //             <h1 class="text-7xl text-gray-800 text-shadow-lg">31</h1>
          //           </div>
          //           <div>
          //             <h3
          //               class="text-2xl mt-1 font-semibold mr-2 -ml-1 text-gray-800 text-shadow-lg"
          //             >
          //               'C
          //             </h3>
          //           </div>
          //           <div class="ml-1 text-shadow-lg text-gray-700">
          //             <h1>Precipitation: 17%</h1>
          //             <h1>Humidity: 71%</h1>
          //             <h1>Wind: 23 km/h</h1>
          //           </div>
          //         </div>

          //         <div class="flex flex-col items-end">
          //           <h1 class="text-xl text-gray-800 text-shadow-lg">
          //             Weather
          //           </h1>
          //           <h2 class="text-sm text-gray-700 text-shadow-lg">
          //             Thursday, 1:00 pm
          //           </h2>
          //           <h2 class="text-sm text-gray-700 text-shadow-lg">Cloudy</h2>
          //         </div>
          //       </div>
          //     </div>
          //     <!-- part 2 -->
          //     <div
          //       class="h-3/6 p-2 rounded-sm border-white/50 border-1 shadow-xl flex flex-col gap-2"
          //     >
          //       <h1 class="text-xs text-gray-800 font-bold text-shadow-lg">
          //         TODAY'S FORECAST
          //       </h1>

          //       <div
          //         class="w-full grow mt-1 grid grid-cols-6 grid-rows-1 divide-x-[1.5px] divide-black/30"
          //       >
          //         <div class="flex flex-col gap-4 items-center justify-center">
          //           <h3
          //             class="text-[12px] font-bold text-gray-700 text-shadow-sm"
          //           >
          //             6:00 AM
          //           </h3>
          //           <div
          //             class="flex items-center justify-center realtive aspect-square w-8"
          //           >
          //             <img
          //               class="absolute w-25"
          //               src="//cdn.weatherapi.com/weather/64x64/night/113.png"
          //               alt="weather img"
          //             />
          //           </div>
          //           <h3
          //             class="text-[16px] text-shadow-sm font-semibold text-gray-900"
          //           >
          //             25'C
          //           </h3>
          //         </div>

          //         <div class="flex flex-col gap-4 items-center justify-center">
          //           <h3
          //             class="text-[12px] font-bold text-gray-700 text-shadow-sm"
          //           >
          //             6:00 AM
          //           </h3>
          //           <div
          //             class="flex items-center justify-center realtive aspect-square w-8"
          //           >
          //             <img
          //               class="absolute w-25"
          //               src="//cdn.weatherapi.com/weather/64x64/night/113.png"
          //               alt="weather img"
          //             />
          //           </div>
          //           <h3
          //             class="text-[16px] text-shadow-sm font-semibold text-gray-900"
          //           >
          //             25'C
          //           </h3>
          //         </div>

          //         <div class="flex flex-col gap-4 items-center justify-center">
          //           <h3
          //             class="text-[12px] font-bold text-gray-700 text-shadow-sm"
          //           >
          //             6:00 AM
          //           </h3>
          //           <div
          //             class="flex items-center justify-center realtive aspect-square w-8"
          //           >
          //             <img
          //               class="absolute w-25"
          //               src="//cdn.weatherapi.com/weather/64x64/night/113.png"
          //               alt="weather img"
          //             />
          //           </div>
          //           <h3
          //             class="text-[16px] text-shadow-sm font-semibold text-gray-900"
          //           >
          //             25'C
          //           </h3>
          //         </div>

          //         <div class="flex flex-col gap-4 items-center justify-center">
          //           <h3
          //             class="text-[12px] font-bold text-gray-700 text-shadow-sm"
          //           >
          //             6:00 AM
          //           </h3>
          //           <div
          //             class="flex items-center justify-center realtive aspect-square w-8"
          //           >
          //             <img
          //               class="absolute w-25"
          //               src="//cdn.weatherapi.com/weather/64x64/night/113.png"
          //               alt="weather img"
          //             />
          //           </div>
          //           <h3
          //             class="text-[16px] text-shadow-sm font-semibold text-gray-900"
          //           >
          //             25'C
          //           </h3>
          //         </div>

          //         <div class="flex flex-col gap-4 items-center justify-center">
          //           <h3
          //             class="text-[12px] font-bold text-gray-700 text-shadow-sm"
          //           >
          //             6:00 AM
          //           </h3>
          //           <div
          //             class="flex items-center justify-center realtive aspect-square w-8"
          //           >
          //             <img
          //               class="absolute w-25"
          //               src="//cdn.weatherapi.com/weather/64x64/night/113.png"
          //               alt="weather img"
          //             />
          //           </div>
          //           <h3
          //             class="text-[16px] text-shadow-sm font-semibold text-gray-900"
          //           >
          //             25'C
          //           </h3>
          //         </div>

          //         <div class="flex flex-col gap-4 items-center justify-center">
          //           <h3
          //             class="text-[12px] font-bold text-gray-700 text-shadow-sm"
          //           >
          //             6:00 AM
          //           </h3>
          //           <div
          //             class="flex items-center justify-center realtive aspect-square w-8"
          //           >
          //             <img
          //               class="absolute w-25"
          //               src="//cdn.weatherapi.com/weather/64x64/night/113.png"
          //               alt="weather img"
          //             />
          //           </div>
          //           <h3
          //             class="text-[16px] text-shadow-sm font-semibold text-gray-900"
          //           >
          //             25'C
          //           </h3>
          //         </div>
          //       </div>
          //     </div>
          //   </div>
          //   <!-- right part -->
          //   <div
          //     class="grow h-full bg-gray-100/10 p-2 flex flex-col gap-1 rounded-sm border-white/50 border-1"
          //   >
          //     <h1 class="h-1/10 text-xs text-gray-800 font-bold text-shadow-lg">
          //       7-DAY FORECAST
          //     </h1>
          //     <div class=" h-[300px] [&::-webkit-scrollbar]:hidden overflow-scroll items-start grid grid-cols-1 gird-rows-7 divide-y-[1.5px] divide-black/30">

          //       <div class="flex items-center justify-between py-3">
          //         <h2 class="w-12 text-xs font-semibold uppercase text-gray-700">
          //           Today
          //         </h2>
  
          //         <div class="flex items-center gap-2 flex-1 justify-center">
          //           <img
          //             class="w-8 h-8"
          //             src="//cdn.weatherapi.com/weather/64x64/day/113.png"
          //             alt="Sunny"
          //           />
          //           <span class="text-sm font-medium text-gray-800">Sunny</span>
          //         </div>
  
          //         <h3 class="text-sm font-semibold text-gray-900">
          //           <span>36°</span>/<span class="text-gray-600">22°</span>
          //         </h3>
          //       </div>
          //       <div class="flex items-center justify-between py-3">
          //         <h2 class="w-12 text-xs font-semibold uppercase text-gray-700">
          //           Today
          //         </h2>
  
          //         <div class="flex items-center gap-2 flex-1 justify-center">
          //           <img
          //             class="w-8 h-8"
          //             src="//cdn.weatherapi.com/weather/64x64/day/113.png"
          //             alt="Sunny"
          //           />
          //           <span class="text-sm font-medium text-gray-800">Sunny</span>
          //         </div>
  
          //         <h3 class="text-sm font-semibold text-gray-900">
          //           <span>36°</span>/<span class="text-gray-600">22°</span>
          //         </h3>
          //       </div>
          //       <div class="flex items-center justify-between py-3">
          //         <h2 class="w-12 text-xs font-semibold uppercase text-gray-700">
          //           Today
          //         </h2>
  
          //         <div class="flex items-center gap-2 flex-1 justify-center">
          //           <img
          //             class="w-8 h-8"
          //             src="//cdn.weatherapi.com/weather/64x64/day/113.png"
          //             alt="Sunny"
          //           />
          //           <span class="text-sm font-medium text-gray-800">Sunny</span>
          //         </div>
  
          //         <h3 class="text-sm font-semibold text-gray-900">
          //           <span>36°</span>/<span class="text-gray-600">22°</span>
          //         </h3>
          //       </div>
          //       <div class="flex items-center justify-between py-3">
          //         <h2 class="w-12 text-xs font-semibold uppercase text-gray-700">
          //           Today
          //         </h2>
  
          //         <div class="flex items-center gap-2 flex-1 justify-center">
          //           <img
          //             class="w-8 h-8"
          //             src="//cdn.weatherapi.com/weather/64x64/day/113.png"
          //             alt="Sunny"
          //           />
          //           <span class="text-sm font-medium text-gray-800">Sunny</span>
          //         </div>
  
          //         <h3 class="text-sm font-semibold text-gray-900">
          //           <span>36°</span>/<span class="text-gray-600">22°</span>
          //         </h3>
          //       </div>
                
          //       <div class="flex items-center justify-between py-3">
          //         <h2 class="w-12 text-xs font-semibold uppercase text-gray-700">
          //           Today
          //         </h2>
  
          //         <div class="flex items-center gap-2 flex-1 justify-center">
          //           <img
          //             class="w-8 h-8"
          //             src="//cdn.weatherapi.com/weather/64x64/day/113.png"
          //             alt="Sunny"
          //           />
          //           <span class="text-sm font-medium text-gray-800">Sunny</span>
          //         </div>
  
          //         <h3 class="text-sm font-semibold text-gray-900">
          //           <span>36°</span>/<span class="text-gray-600">22°</span>
          //         </h3>
          //       </div>
          //       <div class="flex items-center justify-between py-3">
          //         <h2 class="w-12 text-xs font-semibold uppercase text-gray-700">
          //           Today
          //         </h2>
  
          //         <div class="flex items-center gap-2 flex-1 justify-center">
          //           <img
          //             class="w-8 h-8"
          //             src="//cdn.weatherapi.com/weather/64x64/day/113.png"
          //             alt="Sunny"
          //           />
          //           <span class="text-sm font-medium text-gray-800">Sunny</span>
          //         </div>
  
          //         <h3 class="text-sm font-semibold text-gray-900">
          //           <span>36°</span>/<span class="text-gray-600">22°</span>
          //         </h3>
          //       </div>
          //     </div>
          //   </div>

          // </div>
