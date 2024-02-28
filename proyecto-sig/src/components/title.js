import React from 'react'

function title({titulo}) {
  return (
    <>
      <div className="my-5 bg-white border-y p-3 shadow-lg border-[#124A71]">
        <h1 className="text-3xl text-left ml-16 quicksand-regular">{titulo}</h1>
        </div>
    </>
  )
}

export default title