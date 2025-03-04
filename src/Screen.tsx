import { cv } from 'css-variants'
import { RefObject } from 'react'

type ScreenProps = {
    invert?: boolean,
    title: string,
    ref?: RefObject<HTMLDivElement | null>
}
export default function Screen({ invert = false, title, ref } :  ScreenProps) {
    const classes = cv({
        base: 'absolute inset-0 flex flex-col text-center justify-between',
        variants: {
          color: {
            inverted: 'bg-black text-white',
            regular: 'bg-white text-black' 
          },
        },
        defaultVariants: {
          color: 'regular',
        }
      })

      const styles = invert ? {} : {
        clipPath: 'inset(0 0 calc(var(--progress)*100%) 0 )'}
    return (
        <div ref={ref} className={classes({ color: invert ? 'inverted' : 'regular'})} style={styles}>
            <div className="text-[10vw]" style={{
              translate: 'calc(var(--progress,0) * 20vw - 10vw)',
              fontWeight: 'calc(900 - 800 * var(--progress))',
              scale: 'calc(1.25 - var(--progress))'
              }}>+</div>
            <div className={`dynamic-font-weight text-[25vw] lowercase leading-none ${invert ? 'font-nohemi' : 'font-fraunces'}`} style={{
              // fontVariationSettings: `"wght" calc(100 + 700 * var(--progress))`
            }}>{ title }</div>
            <div className="text-[10vw]" style={{
              translate: 'calc(var(--progress,0) * -20vw + 10vw)',
              fontWeight: 'calc(900 - 800 * var(--progress))',
              scale: 'calc(1.25 - var(--progress))'
              }}>+</div>
        </div>
    )
}