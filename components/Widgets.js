import { SearchIcon } from "@heroicons/react/outline";
import News from "./News";
import { useState } from "react";

export default function Widgets({newsResults}) {
  const[articleNum, setArticleNum] = useState(3);
  return (
    <div className="lg:w-[600px] hidden xl:inline ml-8 space-y-5">
        <div className="w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50">
            <div className="flex items-center p-3 rounded-full bg-red-300 relative">
                <SearchIcon className="h-5 z-50 text-gray-500"/>
                <input className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100" type="text" placeholder="Search Twitter" />
            </div>
        </div>

        <div className="text-gray-700 space-y-4 bg-gray-500 rounded-lg py-3 w-[90%] lg:w-[75%]">
          <h4 className="font-bold text px-4">What's happening ?</h4>
          {newsResults.slice(0,articleNum).map((article)=>(
            <News key={article.title} article={article}/>
          ))}
          <button onClick={()=>setArticleNum(articleNum + 3)} className="p-3 text-blue-300 pb-3 hover:text-blue-400">Show more</button>
        </div>

      
    </div>
  )
}