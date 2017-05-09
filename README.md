# _min

`_min` is fast-paced styling system built on `Hyperapp`.


# Project Goals

- [x] Write component styles inline (with shorthand properties) 
- [x] Compile those styles to actual classnames
- [ ] All extracted out to a separate stylesheet
- [x] Use a super lightweight non-React microframework.


## The Basic Idea

Build layouts like this.

```js
<Box 
  flex 
  px2 py2 
  items-center 
  black bgBlue
  >
  Hummus
</Box>
```

Or like this:

```js
const style = {
  maxWidth: '74em',
  margin: '0 auto'
}

<Box css={style}>...</Box>
```

And depending on your config...

```
export const classNameOutput = 'lite' // lite, atomic, monolithic
```


...get classnames like this: 

```js
// lite
// a b c i j k l

// atomic  
// d-flex pl-16 pr-16 pt-16 pb-16 c-374047 bc-0077cc

// monolithic
// _kzfwue
```


## FAQs

**> Can this handle responsive styles?**

``Yes. Even shorthands.`` [See API](https://github.com/jxnblk/understyle#responsive-styles)

**> Does this work with React?**

``Not out of the box, but it could be adapted pretty easily.``

**> Performance Concerns
``Under the hood _min uses CXS, which [holds up well in tests.](https://engineering.hellofresh.com/the-css-in-js-battle-89c34a7a83ea) ``. Regardless, 
I see this type of approach being used more for prototyping, designing, and small websites.
 

## Current/Future Goals

Figure out a way to get all the styles extracted into a separate stylesheet, so
as to eliminate any performance concerns.


--- 

Under the hood: 
  * http://github.com/jxnblk/cxs 
  * http://github.com/jxnblk/understyle.


MIT License