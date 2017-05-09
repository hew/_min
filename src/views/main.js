import { h } from 'hyperapp';
import Nav from './components/nav'
import Intro from './sections/intro'
import { Box } from './layout'

const style = {
  maxWidth: '74em',
  margin: '0 auto'
}

export default (state, actions) => {
  return (
    <Box css={style}>
      {Nav(state, actions, {})}
      {Intro(state, actions, {})}
    </Box>
  )
};
