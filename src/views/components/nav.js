import { h } from 'hyperapp'
import { Box } from 'layout'

const items = [
  { text: 'about', link: '/about'}, 
  { text: 'credits', link: '/credits' }
]

export default (state, actions, ...rest) => {

  const { nav } = state;

  const button = { 
    visibility: nav ? 'visible' : 'hidden',
    transform: nav ? 'translateY(0)' : 'translate(-100%)',
    willChange: 'transform',
    position: 'absolute',
    top: 0
  }

  return (
    <div>
      <Box flex px2 py2 items-center black bgBlue>
        <Box>logo</Box>
        <Box display={['none', 'flex']} marginLeft='auto' items-center self-stretch>
          <Box is='ul' flex flexAuto>
          {items.map(i => 
            <Box is='li' flex items-center self-stretch px2>{i.text}</Box>
          )}
          </Box>
        </Box>
        <Box display={['flex', 'none']} marginLeft='auto'>
          <Box onClick={actions.toggle} flex>
            <img id="nav-button" src="/src/views/svg/elipsis.svg" alt="icon name" />
          </Box>
        </Box>
      </Box>
      <Box flex flex-column items-stretch px3 bgGray width style={button}>
        <Box is="ul">
          {items.map(i => 
            <Box is='li' py2 px3 flex justify-center>{i.text}</Box>
          )}
        </Box>
      </Box>
    </div>
  )
}
