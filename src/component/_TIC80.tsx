'use client'

import { concat, concatCSS, webgl_support } from '@/util'
import Script from 'next/script'

// className generator
// const b = 20
// const w = 240 + b
// const h = 136 + b
// const scales = [1, 2, 3, 4]
//   .map((i) => `min-[${w * i}px]:h-[${h * i}px] min-[${w * i}px]:w-[${w * i}px]`)
//   .join(' ')
const canvasClassName = 'mx-0 my-auto h-full w-full'

export default function TIC80(props: { cart: string; mute?: boolean }) {
  const usingSoftware = !webgl_support()
  const script = concat(
    `var Module = {canvas: document.getElementById('canvas'), arguments:['`,
    props.cart,
    "'",
    props.mute && ", '--volume=0'",
    // if we can't use webgl, use software rendering
    usingSoftware && ", '--soft'",
    ']}',
  )

  return (
    <div className='ltc-border h-[156px] w-[260px] min-[520px]:h-[312px] min-[520px]:w-[520px] min-[780px]:h-[468px] min-[780px]:w-[780px] min-[1040px]:h-[624px] min-[1040px]:w-[1040px]'>
      {/* `Module` is used by tic.js for configuration data */}
      <Script id='tic-bootstrapper'>{script}</Script>

      <div
        className='flex h-full cursor-pointer flex-col items-center justify-center space-y-2 bg-[#1a1c2c] p-3 text-center'
        id='tic80-frame'
        onClick={() => {
          // turn on the canvas
          const canvas = document.getElementById('canvas')
          if (canvas == undefined) {
            return
          }
          canvas.className = concatCSS(canvasClassName, 'block')
          // find this component so we can remove it
          const gameFrame = document.getElementById('tic80-frame')
          // create a script tag
          let scriptTag = document.createElement('script'),
            // find the first script tag in the document
            firstScriptTag = document.getElementsByTagName('script')[0]
          // path to tic80 source
          scriptTag.src = 'tic80/tic80.js'
          // append the script to the DOM
          firstScriptTag.parentNode?.insertBefore(scriptTag, firstScriptTag)
          gameFrame?.remove()
        }}
      >
        <span>- CLICK TO PLAY -</span>
        <span className={usingSoftware ? 'block' : 'hidden'}>
          (I can&apos;t create a WebGL Context, resorting to software
          rendering...)
        </span>
      </div>

      {/* THIS ELEMENT MUST HAVE AN ID OF `CANVAS` */}
      <canvas
        id='canvas'
        className={concatCSS(canvasClassName, 'hidden')}
        style={{
          imageRendering: 'pixelated',
        }}
        onContextMenu={(event) => event.preventDefault()}
        onMouseDown={(_) => window.focus()}
      ></canvas>
    </div>
  )
}
