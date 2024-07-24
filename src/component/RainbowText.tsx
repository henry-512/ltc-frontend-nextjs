/**
 * Rainbow animation with a slow wave up and down. Each letter is offset.
 * @param text The text to rainbow-ify.
 * @returns Multiple <span> elements each containing one word of the text. Each letter is its own <span> element.
 */
export default function RainbowText(props: { text: string }) {
  let global_offset = 0

  return (
    <>
      {props.text.split(' ').map((s, i) => (
        <span
          key={i}
          className='flex animate-rainbow select-none flex-wrap justify-center px-3 text-5xl'
          style={{ paddingBottom: '20px' }}
        >
          {s.split('').map((c, j) => {
            global_offset += 1
            return (
              <span
                key={j}
                className='relative animate-rainbow'
                style={{ animationDelay: `-${global_offset}s` }}
              >
                {c}
              </span>
            )
          })}
        </span>
      ))}
    </>
  )
}
