
class DrawNumber extends HTMLElement { 

    constructor() {
        super()

        this.canvas = document.createElement("canvas")
        this.ctx = this.canvas.getContext('2d')


        this.canvasWidth = 28
        this.canvasHeight = 28
        this.mousePosition = {
            x: 0,
            y: 0
        }

        
    }

    render() {
        this.resizeCanvas()
        this.addOutlineOnCanvas()
        this.expandCanvasSize(140, 140)
        this.appendChild(this.canvas)

        this.ctx.beginPath();
        this.ctx.rect(0, 0, 28, 28);
        this.ctx.fillStyle = "black";
        this.ctx.fill();
    }

    clear() {
        this.ctx.beginPath();
        this.ctx.rect(0, 0, 28, 28);
        this.ctx.fillStyle = "black";
        this.ctx.fill(); 
    }

    draw(e) {
        if (e.buttons !== 1) {
            return 0
        }

        this.ctx.beginPath()

        this.ctx.lineWidth = 2
        this.ctx.lineCap = 'round'
        this.ctx.strokeStyle = '#ffffff'
      
        this.ctx.moveTo(this.mousePosition.x, this.mousePosition.y)
        this.setMousePosition(e)
        this.ctx.lineTo(this.mousePosition.x, this.mousePosition.y)
        this.ctx.stroke()
    }

    setMousePosition(e) {
        this.mousePosition.x = e.clientX / 5
        this.mousePosition.y = e.clientY / 5
    }

    resizeCanvas() {
        this.canvas.width = this.canvasWidth
        this.canvas.height = this.canvasHeight
    }

    addOutlineOnCanvas() {
        this.canvas.style.outlineStyle = 'solid'
    }

    expandCanvasSize(width, height) {
        this.canvas.style.width = `${width}px`
        this.canvas.style.height = `${height}px`
    }


    handleMousemove(e) {
        this.draw(e)
    }

    handleMousedown(e) {
        this.setMousePosition(e)
    }

    handleMouseenter(e) {
        this.setMousePosition(e)
    }

    connectedCallback() {
        this.render()
        this.addEventListener('mousemove', this.draw.bind(this))
        this.addEventListener('mousedown', this.handleMousedown.bind(this))
        this.addEventListener('mouseenter', this.handleMouseenter.bind(this))

    }
}

export { DrawNumber }
