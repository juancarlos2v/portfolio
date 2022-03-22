let app = new Vue({
    el: '#app',
    data: {
        logos: ['recursos/imagenes/logos/html-5.png',
            'recursos/imagenes/logos/css-3.png', 'recursos/imagenes/logos/js.png', 'recursos/imagenes/logos/java.png', 'recursos/imagenes/logos/vue.png', 'recursos/imagenes/logos/spring.png', 'recursos/imagenes/logos/skp.png', 'recursos/imagenes/logos/v-ray.png', 'recursos/imagenes/logos/photoshop.png', 'recursos/imagenes/logos/autocad.png'
        ],
        arq: false,
        web: false,
        banco: false,
        hockey: false,
        senado: false,
        danza: false,
    },
    mounted() {
        body = document.querySelector('.contenedor-total')
        btnWeb = document.querySelector('.botton-web');
        btnArq = document.querySelector('.botton-arq');
    },
    methods: {
        eleccion(campo) {
            if (campo == 'web') {
                this.web = true;
                this.arq = false;
                btnArq.classList.add('tachado')
                btnWeb.classList.remove('tachado')
            }
            if (campo == 'arq') {
                this.web = false;
                this.arq = true;
                btnWeb.classList.add('tachado')
                btnArq.classList.remove('tachado')
            }
        },
        abrirProyecto(proyecto) {
            switch (proyecto) {
                case 'hockey':
                    this.cerrarProyecto();
                    body.classList.add('desenfocar');
                    this.hockey = true;
                    break;
                case 'congreso':
                    this.cerrarProyecto();
                    body.classList.add('desenfocar');
                    this.senado = true;
                    break;
                case 'banco':
                    this.cerrarProyecto();
                    body.classList.add('desenfocar');
                    this.banco = true;
                    break;
                case 'danza':
                    this.cerrarProyecto();
                    body.classList.add('desenfocar');
                    this.danza = true;
                    break;
                default:
                    break;
            }
        },
        cerrarProyecto() {
            body.classList.remove('desenfocar');
            this.hockey = false;
            this.senado = false;
            this.banco = false;
            this.danza = false;
        }
    },
})