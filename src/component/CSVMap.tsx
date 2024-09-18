'use client'

import { ChangeEvent, useState } from 'react'

export default function CSVMap() {
  const [file, setFile] = useState('')
  const [split, setSplit] = useState(',')
  const [hx, setHx] = useState(0)
  const [hy, setHy] = useState(0)

  function handleCSVInput(event: ChangeEvent<HTMLInputElement>) {
    const fileList = event.target.files

    if (fileList == undefined || fileList[0] == undefined) {
      setFile('')
      return
    }

    const reader = new FileReader()
    reader.onload = async (e) => {
      const text = e?.target?.result
      setFile(text as string)
    }

    reader.readAsText(fileList[0])
  }

  const grid = file.split('\n').map((line) => line.split(split))
  const width = grid[0].length

  return (
    <div className='flex flex-col'>
      <input type='file' onChange={handleCSVInput} />
      <input type='text' onChange={(e) => setSplit(e.target.value)} />
      <div>
        {hx},{hy}
      </div>
      <div className='flex-col'>
        <div
          className='grid space-x-4 overflow-scroll'
          style={{
            gridTemplateColumns: `repeat(${width}, 1fr)`,
            height: 'calc(100vh - 200px)',
          }}
        >
          {grid.map((line, y) =>
            line.map((value, x) => (
              <div
                data-tooltip-target={`${x},${y}`}
                key={`${x},${y}`}
                onMouseEnter={() => {
                  setHx(x)
                  setHy(y)
                }}
              >
                {value}
              </div>
            )),
          )}
        </div>
      </div>
    </div>
  )
}
