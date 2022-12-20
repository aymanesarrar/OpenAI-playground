import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import openai from './lib/openai'
import {FaSpinner} from 'react-icons/fa'


function App() {
  const [url, setUrl] = useState<string | undefined>("")
  const [prompt, setPrompt] = useState("")
  const [loading, setLoading] = useState(false);
 
  const generateImage = async () => {
    setLoading(true)
    try {
      const data = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: "512x512",
    });
    setUrl(data.data.data[0].url)
    } catch (error) {
      alert("image not found")
    }
    setLoading(false)
  };
  
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className='flex flex-col'>
        <input className='border-2 border-black p-2 rounded-lg mb-2' type="text" value={prompt} onChange={e => setPrompt(e.target.value)}/>
    <button className='p-2 border-black border-2 rounded-lg mb-2 hover:-translate-y-1  transition-all duration-150' onClick={generateImage}>generate picture</button>
     {
      loading ? <FaSpinner className='animate-spin mx-auto text-red-500'/> :  <img src={url} alt="" /> 
     }
      </div>
     
    </div>
  )
}

export default App
