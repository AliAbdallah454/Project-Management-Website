'use client'

export default function InputForm({ text, type, onChange }) {
  return (
    
    <div className="my-2">
        <p className="text-sm text-gray-500">{text}</p>
        <input onChange={onChange} type={type} className="py-1 w-80 outline-none border-b-2 border-black"/>
    </div>

  )
}
