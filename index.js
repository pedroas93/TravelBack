const express = require('express');
const app = express();
var cors = require('cors')
app.use(cors())

const travels = [
    {
        id: 1,
        title: 'Cuba',
        subTitle: 'Cuba dans tous ses états',
        type: 'Explore',
        hours: 16,
        rate: 4.5,
        ratings: 302,
        include: [
            'La balade entre les mogotes de Viñales ',
            'Topes de Collantes et la Sierra Maestra',
            'La Havane, Trinidad & Santiago',
            'Le tour à bord dune voiture américaine',
            'vols inclus'
        ],
        disacount: 2599,
        cost: 2499,
        currency: 'EUR',
        marker: 'COUP DE COEUR',
        image: 'https://firebasestorage.googleapis.com/v0/b/squeeze-a22a6.appspot.com/o/101.jpg?alt=media&token=0f95008e-c14b-4ca6-ab81-57f33240df63'
    },
    {
        id: 2,
        title: 'Cuba avec extension balnéaire',
        subTitle: 'De lorient à loccident',
        type: 'Explore',
        hours: 19,
        rate: 4.5,
        ratings: 9,
        include: [
            'La Havane, Trinidad & Santiago',
            'Cienfuegos et la baie des cochons',
            'La Sierra Escambray et la Sierra Maestra',
            'Détente sur les plages de Maria la Gorda',
            'vols inclus'
        ],
        disacount: 2799,
        cost: 2699,
        currency: 'EUR',
        marker: 'Nouvel itinéraire',
        image: 'https://firebasestorage.googleapis.com/v0/b/squeeze-a22a6.appspot.com/o/331440.jpg?alt=media&token=05897f62-6607-4239-9c89-aeec59d42596'
    },
    { 
        id: 3, 
        title: 'Cuba',
        subTitle: 'Cuba dans tous ses états (version confort)',
        type: 'Confort',
        hours: 16,
        rate: 4.5,
        ratings: 29,
        include: [
            'Navigation jusquà Cayo Iguanas',
            'Exploration de la Gran Piedra en 4x4',
            'La Havane, Trinidad & Santiago',
            'Les ruelles et les mogotes de Viñales',
            'vols inclus'
        ],
        disacount: 2999,
        cost: 2899,
        currency: 'EUR',
        marker: '',
        image: 'https://firebasestorage.googleapis.com/v0/b/squeeze-a22a6.appspot.com/o/331448.jpg?alt=media&token=b1af2d42-8082-483b-8f81-3cb3bf708bef'
    },
];
app.get('/', (req, res) => {
    res.send('Hello Travels')
});

app.get('/api/travels', (req, res) => {
    res.send(travels);
});

app.get('/api/travels/:id', (req, res) => {
    const course = travels.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The travel with the given ID was not foung')
    res.send(course);
});


const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listening on port ${port}...`))