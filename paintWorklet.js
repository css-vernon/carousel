registerPaint("carousel-item", class {
    static get inputProperties(){
        return ['--carousel-active-item', '--carousel-item']
    }

    paint(ctx, geom, props){
        
        const activeItem = props.get('--carousel-active-item').toString()
        
        const itemBeingPainted = props.get('--carousel-item').toString()

        if(itemBeingPainted == activeItem){
            ctx.fillStyle = "#00F"      
            ctx.fillRect(0, 0, geom.width, geom.height);
        }
    }
})