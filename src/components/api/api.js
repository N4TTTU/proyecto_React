const products = [
    {
        id: 1,
        title: 'Paquete Diseño web Económico',
        description: 'Incluye dominio y hosting para sitio web. Sitio estático con galería de imágenes (10 máximo), formulario de contacto y más.',
        precio: 79,
        imgUrl: 'https://quierotenerunblog.com/wp-content/uploads/2021/08/Check-75x75-1.svg',
        category: 'DiseñoWeb',
    },
    {
        id: 2,
        title: 'Paquete Diseño web Básico',
        description: 'Incluye dominio y hosting para sitio web. Sitio de hasta 5 páginas, galería de imágenes (50 máximo), formulario de contacto y más.',
        precio: 99,
        imgUrl: 'https://quierotenerunblog.com/wp-content/uploads/2021/08/Check-75x75-1.svg',
        category: 'DiseñoWeb',
    },
    {
        id: 3,
        title: 'Paquete Diseño web Premium',
        description: 'Incluye dominio y hosting para sitio web. Tienda virtual, galería de imágenes (Ilimitado), formulario de contacto y más.',
        precio: 189,
        imgUrl: 'https://quierotenerunblog.com/wp-content/uploads/2021/08/Check-75x75-1.svg',
        category: 'DiseñoWeb',
    },
    {
        id: 4,
        title: 'Paquete Diseño Gráfico Económico',
        description: 'Incluye dominio y hosting para sitio web. Sitio de hasta 5 páginas, galería de imágenes (50 máximo), formulario de contacto y más.',
        precio: 99,
        imgUrl: 'https://quierotenerunblog.com/wp-content/uploads/2021/08/Check-75x75-1.svg',
        category: 'DiseñoGrafico',
    },
    {
        id: 5,
        title: 'Paquete Diseño Gráfico Básico',
        description: 'Incluye dominio y hosting para sitio web. Sitio de hasta 5 páginas, galería de imágenes (50 máximo), formulario de contacto y más.',
        precio: 99,
        imgUrl: 'https://quierotenerunblog.com/wp-content/uploads/2021/08/Check-75x75-1.svg',
        category: 'DiseñoGrafico',
    },
    {
        id: 6,
        title: 'Paquete Diseño Streaming',
        description: 'Incluye dominio y hosting para sitio web. Sitio de hasta 5 páginas, galería de imágenes (50 máximo), formulario de contacto y más.',
        precio: 99,
        imgUrl: 'https://quierotenerunblog.com/wp-content/uploads/2021/08/Check-75x75-1.svg',
        category: 'Streaming',
    }
]


const promesa = new Promise(function(resolve, reject) {

    setTimeout(function() {
        resolve(products);
    }, 500);
});

function getProducts() {
    return promesa;
}

export {
    getProducts,
}