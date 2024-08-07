'use client'

import { concat, webgl_support } from '@/util'
import Script from 'next/script'

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
    <div className='h-[160px] w-[260px] min-[520px]:h-[320px] min-[520px]:w-[520px] min-[780px]:h-[480px] min-[780px]:w-[780px] min-[1040px]:h-[640px] min-[1040px]:w-[1040px]'>
      {/* `Module` is used by tic.js for configuration data */}
      <Script id='tic-bootstrapper'>{script}</Script>

      <div
        className='flex h-full cursor-pointer flex-col items-center justify-center space-y-2 bg-[#1a1c2c] p-3 text-center'
        id='tic80-frame'
        onClick={() => {
          // find this component so we can remove it
          const gameFrame = document.getElementById('tic80-frame')
          // create a script tag
          let scriptTag = document.createElement('script'),
            // find the first script tag in the document
            firstScriptTag = document.getElementsByTagName('script')[0]
          // path to tic80 source
          scriptTag.src = 'tic80.js'
          // append the script to the DOM
          firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag)
          gameFrame.remove()
        }}
      >
        <span>- CLICK TO PLAY -</span>
        <span className={usingSoftware ? 'display:block' : 'display:hidden'}>
          (I can&apos;t create a WebGL Context, resorting to software
          rendering...)
        </span>
      </div>

      {/* THIS ELEMENT MUST HAVE AN ID OF `CANVAS` */}
      <canvas
        id='canvas'
        className='mx-0 my-auto block h-full w-full'
        style={{
          imageRendering: 'pixelated',
        }}
        onContextMenu={(event) => event.preventDefault()}
        onMouseDown={(_) => window.focus()}
      ></canvas>
    </div>
  )
}
