let opacityLeft = {
  offscreen: {
    opacity: 0,
    x: -100,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8
    }
  },
}

let right = {
  offscreen: {
    opacity: 0,
    x: 100,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8
    }
  }
}

let parent = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4
    }
  }
}
let up = {
  offscreen: {
    opacity: 0,
    y: 50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8
    },
  }
}
export {
  opacityLeft,
  right,
  parent,
  up
}