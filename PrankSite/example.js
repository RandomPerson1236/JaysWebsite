$(()=>{
    let js_main = document.querySelectorAll('.js-m');

    const types_1 = [
        'function', 'let',
        'const', 'var',
        'async', 'for',
        'while', 'do',
        'if', 'else'
    ];

    let data = null;

    function trigger_syntax(){
        js_main.forEach(el => {
            for (let i = 0; i < el.children.length; i++){
                if (el.children[i].tagName = 'code'){
                    data = el.children[i].innerHTML;

                    types_1.forEach(type1 => {
                        let reg = new RegExp(type1, 'g')
                        data = data.replace(reg, `<span class="token-tp1">${type1}</span>`);
                    });
                    data = data.replace(/'(.*?)'/g, '<span class="token-string">&apos;$1&apos;</span>');

                    el.children[i].innerHTML = data;
                }
            }
        });
    }
    trigger_syntax();
})