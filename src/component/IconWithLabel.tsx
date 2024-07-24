import { concat } from '@/util'
import React, { ReactElement, JSXElementConstructor } from 'react'

/**
 * An icon with a label. The label disappears after a specified breakpoint.
 *
 * @param text The label's text.
 * @param link A link to go to when clicked.
 * @param children Expects some kind of icon.
 * @param newTab True if the link opens in a new tab. Default false.
 * @param textHideBreakpoint What breakpoint to hide the text on. Default 'sm'
 * @param inline True if the link should be inline. Default false.
 * @returns
 */
export default function IconWithLabel(props: {
  text: string
  link: string
  children: ReactElement<any, string | JSXElementConstructor<any>>
  newTab?: boolean
  textHideBreakpoint?: 'none' | 'xs' | 'sm'
  inline?: boolean
}) {
  const textCSS = concat(
    props.textHideBreakpoint === 'none' && 'inline animate-fadeVisible',
    'animate-fadeHidden',
    props.textHideBreakpoint === 'xs'
      ? 'xs:inline xs:animate-fadeVisible'
      : 'sm:inline sm:animate-fadeVisible',
  )
  return (
    <a
      href={props.link}
      className={concat(
        props.inline ? 'inline' : 'flex flex-row items-center space-x-1',
        'ltc-button-focus-outline ltc-color-link text-nowrap rounded-lg px-1',
      )}
      target={props.newTab ? '_blank' : undefined}
      rel={props.newTab ? 'noopener noreferrer' : undefined}
    >
      <span className={textCSS}>{props.text}</span>
      {props.inline
        ? React.Children.map(props.children, (c) =>
            React.cloneElement(c, {
              className: concat(c.props.className, 'inline'),
            }),
          )
        : props.children}
    </a>
  )
}
