export default function VideoPlayer(props: { src: string }) {
  return (
    <video controls preload='none' width='500' height='400'>
      <source src={props.src} type='video/mp4' />
      Your browser does not support the video tag (sorry).
    </video>
  )
}
