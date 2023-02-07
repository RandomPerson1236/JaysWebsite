$(()=>{
    let js_main = document.querySelectorAll('.js-m');
    const types_1 = [
        'function', 'let',
        'const', 'var',
        'async', 'for',
        'while', 'do',
        'if', 'else'
    ];
    const types_2 = [
        'split', 'replace',
        'forEach', 'querySelectorAll',
        'querySelector',
        'getElementById', 'getElementbyClassName',
        'getElementByTagName', 'join', 'log'
    ];

    let data = null;

    function trigger_syntax(){
        js_main.forEach(el => {
            for (let i = 0; i < el.children.length; i++){
                if (el.children[i].tagName = 'code'){
                    data = el.children[i].innerHTML;

                    if (el.classList.contains('fill-spaces')){
                        data = data.replace(/  /g, '<span class="token-empty-space">•</span>')
                    }

                    data = data.replace(/'(.*?)'/g, '<span class="token-string">&apos;$1&apos;</span>');

                    types_1.forEach(type1 =>{
                        
                        let reg_string = new RegExp("'" + type1 + "'", 'g')
                        console.log(reg_string)
                        data = data.replace(reg_string, `<span class="token-string">${type1}-</span>`);

                        if (type1 != "'"+type1+"'"){
                            console.log(type1.indexOf())
                            let reg = new RegExp(type1, 'g')
                            data = data.replace(reg, `<span class="token-tp1">${type1}</span>`);
                        }

                    });

                    types_2.forEach(type2 => {

                        let reg = new RegExp(type2, 'g')
                        data = data.replace(reg, `<span class="token-tp2">${type2}</span>`);

                    });

                    el.children[i].innerHTML = data;
                }
            }
        });
    }
    trigger_syntax();
})