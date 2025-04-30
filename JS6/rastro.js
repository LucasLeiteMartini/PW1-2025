(function() {
  
    const rastro = []
    document.addEventListener('mousemove', (e) => {
        const dot = document.createElement('div')
        dot.className = 'dot'
        dot.style.left = e.clientX + 'px';
        dot.style.top = e.clientY + 'px';
        rastro.push(dot)
        if(rastro.length > 8){
            const remove = rastro.shift()
            document.body.removeChild(remove)

            // Timeout configurado só para o rastro durar um pouco mais.
            // setTimeout(()=>{
            //     document.body.removeChild(remove)
            // }, 20)
        }
        document.body.appendChild(dot);

    })


})();
