import { h }  from 'hyperapp'
import parseProps from 'styles/logic/parse-props'
  
const getEvent = x => Object.keys(x).filter(n => n.includes('on') ? x : null)

export const Box = ({ ...originalProps }, children) => {

  // Get atomic classes
  const { className } = parseProps(originalProps)
  // Get everything else
  const { is = 'div', style, ...rest } = originalProps
  // Get the event (can be only be one per div)
  const evt = getEvent(rest).length ? {[getEvent(rest)]: rest[getEvent(rest)]} : null
  // Prepare our data
  const data = { style: style, class: className, ...evt }

  return (
    h(is, data, children)
  )
}
