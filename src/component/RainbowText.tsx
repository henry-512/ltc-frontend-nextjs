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
          className="text-5xl animate-rainbow px-3 select-none flex flex-wrap justify-center"
          style={{ paddingBottom: '20px' }}
        >
          {s.split('').map((c, j) => {
            global_offset += 1
            return (
              <span
                key={j}
                className="animate-rainbow relative"
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
