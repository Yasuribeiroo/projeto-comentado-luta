let char = new Knight('John')
let monster = new LitteMonster()

const stage = new Stages(
    char,
    monster,
    documnent.querySelector('#char'),
    document.querySelector('#monster')
)

stage.Start()