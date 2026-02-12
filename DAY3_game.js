const SPIN = new function () {
    let SPIN = this,
        cnv, ctx, width, height, nodes = [], node_count = 0, for_destroy = {}, down_keys = {};
    let $ = (id) => { return document.getElementById(id) }
    let rect = (x, y, w, h, color) => {
        ctx.fillStyle = color
        ctx.fillRect(x, y, w, h);
    }
    let text_game = (x,y,color, text) => {
        ctx.fillStyle = color
        ctx.fillText(text, x, y)
    }
    class Node {
        constructor(x, y, w, h, color, upd) {
            this.id = node_count++
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.color = color
            this.update = upd
            nodes.push(this);
        }
        _update() {
            if (this.update) {
                   this.update(this)    
            }
        }
        draw() {
             rect(this.x, this.y, this.w, this.h, '#ffffff')
        }
        destroy() {
            for_destroy[this.id] = this;
        }
        move(x, y) {
            this.x += x
            this.y += y
        }
        intersect = (node) => {
            return !(this.x+this.w < node.x || this.y+this.h < node.y || this.x > node.x+node.w || this.y > node.y+node.h)
        }
    }
    SPIN.create_node = (x, y, w, h, color, upd) => {
        return new Node(x, y, w, h), color, upd;
    }
    SPIN.draw_text = () => {

    }
    SPIN.start = (W, H) => {
        cnv = $('cnv')
        ctx = cnv.getContext('2d')
        wight = W
        height = H
        cnv.width = width
        cnv.height = height
        ctx.textBaseline = 'top'
        ctx.font = '25px'

        window.addEventListener('keydown', (e) => {
            down_keys[e.code] = true
        })
        window.addEventListener('keyup', (e) => {
            down_keys[e.code] = false
        })
        SPIN.update()
    }
}

SPIN.update = () => {
    ctx.clearRect(0, 0, width, height) ;
    for (let i = nodes.lenght-1; i >= 0; i--) {
        if (for_destroy[nodes[i]].id) {
            nodes.splice(i, 1)
            continue
        }
        nodes[i]._update()
        nodes[i].draw()
    }
    requestAnimationFrame(SPIN.update)
    timer++
    console.log(nodes.lenght)
}

SPIN.key = (key) => {
    return key
}
SPIN.clean_timer = () => {
        timer = 0
    }
    SPIN.get_timer = () => {
        return timer
    }
window.addEventListener('load', function () {
    SPIN.start(640, 480)
    let enemies = [];
    let score = 0;
    let enemy_ai = (node) => {
        node.y += 1
    }
    for (let i = 0; i <= 3; i++) {
        for (let j = 0; j <= 10; j++) {
            enemies.push(SPIN.create_node(10+(20+40)*i,20+ (20+40) * j,40,40, '#e86060', enemy_ai))
        }
    }
    let bullet_ai = (node) => {
        node.y -= 3
        if (node.y+node.h < 0) {
            node.destroy();
            for (let i = enemies.length -1 ; i >= 0; i--) {
                if (node.intersect(enemies[i])) {
                    enemies[i].destroy
                    node.destroy()
                    enemies.splice(i, 1)
                    score++
                    break
                }
            }
        }
    }
    let fire = (x, y) => {
        if (SPIN.get_timer() > 25) {
            SPIN.create_node(x, y, 10, 20, '#8639d3', bullet_ai)
        }
    }
    SPIN.create_node(0, 480-50-30, 50, 50, "#4cc43f", (node) => {
        if (SPIN.key('KeyA')) {
            node.x -=1
        }
        if (SPIN.key('KeyD')) {
            node.x += 1
        }
        if (SPIN.key('Space')) {
            fire(node.x+25-5, node.y)
        }
    })
    SPIN.set_draw((s) =>{
        s.draw_text(640/2-60, 5, '#58bf5b', 'Игровой счет: '+score)
    })
})
    SPIN.start(480, 360)