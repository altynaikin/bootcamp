class Game{
    constructor(){
        
    }

    static allChars = [];
    static _score = 0
    static get score(){return this._score};
    static set score(val){
        this._score = val;
        func3($(".score-board"), this.score);
    }
    static createArena(){
        let allChars = this.allChars;
        let Char = this;
        $(".hole").each(function(i,item){
            allChars.push(new Char());
            $(item).append(allChars[allChars.length-1].$);
        })

    };
    static rChar(){
        return func2(this.allChars)
    }
    static toggleChar(){
        const rChar = this.rChar();
        rChar.activate();
        setTimeout(()=>{
            if(rChar.status){
                rChar.hide();
            }
            this.toggleChar()
        },1000)
    }
    static hideAll(){
        func4(this.allChars)
    }

    static start(){
        this.score=0;
        this.hideAll();
        this.toggleChar();
        this.allChars.forEach(item=>{
            func1( item, item.$, this )
        })
    }

    $ = $('<div class="character active-char"></div>');
    status = true;
    activate(){
        this.status = true;
        func5(this.$);
    };
    hide(){
        this.status = false;
        func6(this.$);
    };
}
Game.createArena();

const $start = $(".start-btn");

$start.on("click",()=>{
    Game.start()
})

let $hummer = $(".hummer");
$(document).on("mousemove",(e)=>{
    $hummer.css("top", e.pageY-150 + "px")
    $hummer.css("left", e.pageX-25 + "px")
})
$(document).on("mousedown",(e)=>{
    $hummer.addClass("hummer-punch")
})
$(document).on("mouseup",(e)=>{
    $hummer.removeClass("hummer-punch")
})