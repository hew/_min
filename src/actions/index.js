export default {
  add: ({ num }) => ({ num: num + 1 }),
  sub: ({ num }) => ({ num: num - 1 }),
  toggle: (model) => ({ nav: !model.nav }) 
}
