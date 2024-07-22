export default function RainbowText(props: { text: string }) {
  let global_offset = 0

  return (
    <>
      {props.text.split(' ').map((s, i) => (
        <span
          key={i}
          className="text-5xl animate-rainbow px-3 select-none flex flex-wrap justify-center"
          style={{ marginBottom: '10px' }}
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
