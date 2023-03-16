new Vue({
    el:"#vue-app",
    data:{
        count:0,
        width:250,
        state:true,
        normalImage:"images/normal.jpeg",
        brokenImage:"images/broken.jpeg",
        punch:"Punch",
        replace:"Replace"
    },
    methods:{
        punchBag(){
            this.count++;
            this.width=this.width-50;
            if(this.count==5){
                this.state=false;
            }
        },
        replaceBag(){
            this.state=true;
            this.width=250;
            this.count=0;
        }
    },
    computed: {
        imageUrl(){
            return this.state ?  this.normalImage : this.brokenImage;
        }
    }
})