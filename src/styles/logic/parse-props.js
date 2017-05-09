import cxs from 'cxs'
import cxsLite from 'cxs/lite'
import cxsMonolithic from 'cxs/monolithic'
import { createUnderstyle, filterProps } from '@hew/understyle'
import classnames from 'classnames'
import merge from 'deepmerge'
import config from './set-config'
import { classNameOutput } from 'styles/config'

const AXS_PROPS = /^(css|_css)$/

const parseProps = (original = {}) => {
  const options = config.get()
  const _style = createUnderstyle(options)
  const filter = filterProps(options)

  const props = {}

  Object.keys(original)
    .forEach(key => {
      if (!filter(key) || AXS_PROPS.test(key)) return
      const value = original[key]
      props[key] = value
    })

  const propStyles = _style(original)
  propStyles['boxSizing'] ? delete propStyles['boxSizing'] : null

  const styles = merge.all([
    (original._css || {}),
    propStyles,
    (original.css || {}),
  ])

  // What kind of classes do we want?
  let cxsClassName;

  if (classNameOutput === 'lite') {
    cxsClassName = cxsLite(styles)    
  }
  else if (classNameOutput === 'monolithic') {
    cxsClassName = cxsMonolithic(styles)
  }
  else {
    cxsClassName = cxs(styles)
  }

  const className = classnames(original.className, cxsClassName)

  return { props, className }
}

export default parseProps