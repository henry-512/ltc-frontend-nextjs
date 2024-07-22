export default function WhereAmI(props: { path: string; desc: string }) {
  return (
    <div className="bg-gray-700 flex flex-row justify-center items-center">
      <div className="max-w-screen-xl flex flex-row justify-between align-center w-screen px-10 space-x-3 pb-0.5">
        <span>{props.path}</span>
        <span className="hidden xs:block">{props.desc}</span>
      </div>
    </div>
  )
}
