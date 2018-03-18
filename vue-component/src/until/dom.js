export function on(el, event, func) {
  el.addEventListener(event, func, false)
}

export function off(el, event, func) {
  el.removeEventListener(event, func)
}

export function css() {
  const el = arguments[0]

  if (!arguments[2]) {
    Object.keys(arguments[1]).forEach(key => {
      el.style[key] = arguments[1][key]
    })
  } else {
    el.style[arguments[1]] = arguments[2]
  }
}

export function attr(el, arg) {
  if (typeof arg === 'object') {
    for (let property in arg) {
      el.setAttribute(property, arg[property])
    }
  } else {
    return el.getAttribute(arg)
  }
}

export function removeAttr(el, attr) {
  el.removeAttribute(attr)
}

export function addClass(el, newClass) {
  let classes = attr(el, 'class')

  if (!classes) {
    classes = []
  } else {
    classe = classes.split(' ')
  }

  if (typeof newClass === 'string') {
    classes.push(newClass)
  } else {
    newClass.forEach(_class => {
      classes.push(_class)
    })
  }

  attr(el, {
    'class': classes.join(' ')
  })
}