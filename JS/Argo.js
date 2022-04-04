AFRAME.registerComponent("argo", {
    schema: {
        modelRef: {
            type: "string",
            default: "/Argo-III.gb"
        },
        int: function(){
            this.el.setAttribute("glb-model", this.data.modelRef)
            const position = {
                x: 0,
                y: 50,
                z: 80
            }
            const rotation ={
                x: 0, 
                y: -100,
                z: 0
            }
            this.el.setAttribute("position", position)
            this.el.setAttribute("rotation", rotation)
        }
    }
})