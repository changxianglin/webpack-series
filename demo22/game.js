class Game {
  constructor() {
    this.time = 60
    this.numTotal = 0
    this.level = 2000
    this.timer = null
  }

  getById (id) {
    return document.getElementById(id)
  }

  play = () => {
    console.log('游戏开始了')
    this.timer = setInterval(() => {
      this.time--
      if(this.time === 0) {
        this.end()
      }
      this.getById('time').innerText = this.time
      this.getRandom()
    }, 1000)
  }

  getRandom = () => {
    var nums = this.getById('mouseFrame').children.length
    var math = Math.random()
    var red = parseInt(nums * math)
    var curMouse = this.getById('mouseFrame').children[red]
    curMouse.className = 'mouse out'
    setTimeout(() => {
      curMouse.className = 'mouse'
    }, this.level)
  }

  hitMouse = () => {
    var mouseFrameChildrens = this.getById('mouseFrame').children
    var mouseFrame = this.getById('mouseFrame')

    mouseFrame.addEventListener('click', (env) => {
      var target = env.target
      var className = target.className
      if(className.indexOf('out') != -1) {
        target.className = 'mouse hit'
        this.getById('numHit').innerText = ++ this.numTotal
      }
    })
  }

  end() {
    clearInterval(this.timer)
  }
}

var game = new Game()

start = game.play