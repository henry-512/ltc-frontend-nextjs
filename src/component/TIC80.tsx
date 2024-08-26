import dynamic from 'next/dynamic'

const TIC = dynamic(() => import('@/component/_TIC80'), {
  ssr: false,
})

export default function TIC80(props: { cart: string; mute?: boolean }) {
  return <TIC cart={props.cart} mute={props.mute} />
}
