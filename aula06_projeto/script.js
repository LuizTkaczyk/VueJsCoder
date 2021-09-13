new Vue({
    el: '#app',
    data: {
        running: false,
        playerLife: 100,
        monsterLife: 100,
        logs: []
    },
    computed: {
        // Verificando se há resultado na tela
        hasResult() {
            return this.playerLife == 0 | this.monsterLife == 0

        }

    },
    methods: {
        startGame() {
            this.running = true
            this.playerLife = 100
            this.monsterLife = 100
            this.logs = []
        },
        attack(especial) {
            this.hurt('monsterLife', 5, 10, especial, 'Jogador', 'Monstro', 'player')
            if (this.monsterLife > 0) {
                this.hurt('playerLife', 7, 12, false, 'Monstro', 'Jogador', 'monster')
            }


        },
        hurt(prop, min, max, especial, source, target, cls) {
            const plus = especial ? 5 : 0
            const hurt = this.getRandom(min + plus, max + plus)
            // aplicando a lógica do valor nunca ser negativo
            this[prop] = Math.max(this[prop] - hurt, 0)
            this.registerLog(`${source} atingiu ${target} com ${hurt}`, cls)

        },
        getRandom(min, max) {
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },

        healAndHurt() {
            this.heal(10, 15)
            this.hurt('playerLife', 7, 12, false,'Monstro', 'Jogador', 'monster')
        },
        // função da cura
        heal(min, max) {
            const heal = this.getRandom(min, max)
            this.playerLife = Math.min(this.playerLife + heal, 100)
            this.registerLog(`Jogador ganhou força de ${heal}`,'player')
        },
        registerLog(text, cls) {
            //com unshift os logs mais recentes ficarão por primeiro
            this.logs.unshift({ text, cls })
        }


    },
    watch: {
        // O watch fica observando o hasResult
        // Caso a pessoa perda o jogo, os botões ataque, ataque especial , etc,  não aparecerão
        hasResult(value) {
            if (value) this.running = false
        }

    }
})
