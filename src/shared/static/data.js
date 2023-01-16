import {ICONS} from "../constants/constants";

const panelTab = [
    {
        id: 1,
        title: 'Tous',
    },
    {
        id: 2,
        title: 'Dev',
    },
    {
        id: 3,
        title: 'Travel',
    },
    {
        id: 4,
        title: 'React',
    },
    {
        id: 5,
        title: 'Vue',
    },
    {
        id: 6,
        title: 'Next',
    },
    {
        id: 7,
        title: 'Google',
    },
    {
        id: 8,
        title: 'Jurassic Park',
    },
]

const submenu = {
    'main': [
        {
            id: 1,
            title: 'Главная',
            icon: ICONS.homePanelIcon
        },
        {
            id: 2,
            title: 'Shorts',
            icon: ICONS.shortsPanelIcon
        },
        {
            id: 3,
            title: 'Подписки',
            icon: ICONS.subscribePanelIcon
        },
    ],
    'library': [
        {
            id: 1,
            title: 'Библлиотека',
            icon: ICONS.libraryPanelIcon
        },
        {
            id: 2,
            title: 'История',
            icon: ICONS.historyPanelIcon
        },
        {
            id: 3,
            title: 'Ваши видео',
            icon: ICONS.myVideosPanelIcon
        },
        {
            id: 4,
            title: 'Посмотреть позже',
            icon: ICONS.laterPanelIcon
        },
        {
            id: 5,
            title: 'Понравившиеся',
            icon: ICONS.myFavoritePanelIcon
        },
        {
            id: 4,
            title: 'Посмотреть позже',
            icon: ICONS.laterPanelIcon
        },
        {
            id: 5,
            title: 'Понравившиеся',
            icon: ICONS.myFavoritePanelIcon
        },
        {
            id: 2,
            title: 'История',
            icon: ICONS.historyPanelIcon
        },
        {
            id: 3,
            title: 'Ваши видео',
            icon: ICONS.myVideosPanelIcon
        },
    ]

}

const listVideos = [
    {
        id: 1,
        video_src: 'https://www.youtube.com/watch?v=NpQbEadBq_w&ab_channel=Settle',
        title: 'Chill Lofi Beats [chill lo-fi hip hop beats]',
        author: 'Lofi',
        verified: false,
        live: false
    },
    {
        id: 2,
        video_src: 'https://www.youtube.com/watch?v=9xBNj5g8hnw&ab_channel=DeepTunes',
        title: '2023 Lofi Beats 🎵 Lofi Hip Hop Mix ~ Calm Relaxing beats to start 2023 to',
        author: 'Lofi Mix',
        verified: true,
        live: true
    },
    {
        id: 3,
        video_src: 'https://www.youtube.com/watch?v=v4GIfNf7AYk&ab_channel=EdSheeran',
        title: 'Ed Sheeran – Castle On The Hill & Shape Of You feat. Stormzy [Live from the Brit Awards 2017]',
        author: 'Ed Sheeran',
        verified: true,
        live: false
    },
    {
        id: 4,
        video_src: 'https://www.youtube.com/watch?v=-5QkMlkCt08&ab_channel=ChauCodes',
        title: 'My 2023 Home Office Tour',
        author: 'Design Home',
        verified: true,
        live: false
    },
    {
        id: 5,
        video_src: 'https://www.youtube.com/watch?v=lyno2CZ5mrg&ab_channel=point',
        title: 'Цветная история или же 3 дня кранчей [Devlog]',
        author: 'Dev',
        verified: false,
        live: true
    },
    {
        id: 6,
        video_src: 'https://www.youtube.com/watch?v=zwujeo1MLJ8&ab_channel=SeanStudy',
        title: '9-Hour Study with Me | Pomodoro Timer, Lofi Relaxing Music | Day 102',
        author: 'Sean Study',
        verified: false,
        live: true,
        followers: '7,23 тыс. подписчиков'
    },
    {
        id: 7,
        video_src: 'https://www.youtube.com/watch?v=AkEnidfZnCU&t=20145s&ab_channel=SonnySangha',
        title: '9-Hour Study with Me | Pomodoro Timer, Lofi Relaxing Music | Day 102',
        author: 'Sangha',
        verified: false,
        live: true,
        followers: '7,23 тыс. подписчиков'
    },
    {
        id: 8,
        video_src: 'https://www.youtube.com/watch?v=jfKfPfyJRdk&ab_channel=LofiGirl',
        title: 'lofi hip hop radio - beats to relax/study to',
        author: 'Lofi Girl',
        verified: true,
        live: true,
        followers: '11,8 млн подписчиков'
    },
    {
        id: 9,
        video_src: 'https://www.youtube.com/watch?v=g2a5PmIhryA&ab_channel=DigitalDreams',
        title: '[8K60] 8K Zelda Botw RTX 4090 - Raytracing GI - Ultra graphic gameplay 2022 - NEW Extreme settings',
        author: 'Digital Dreams',
        verified: true,
        live: false,
        followers: '123 тыс. подписчиков'
    },
    {
        id: 10,
        video_src: 'https://www.youtube.com/watch?v=1aIOu5_u0Js&ab_channel=point',
        title: 'Месяц на разработку игры, третий гейм джем! [Devlog]',
        author: 'point',
        verified: false,
        live: false,
        followers: '6,76 тыс. подписчиков'
    },
    {
        id: 11,
        video_src: 'https://www.youtube.com/watch?v=Uw3dmMjNRXY&ab_channel=CheRa',
        title: 'Как я за год стал 3D художником с полного НУЛЯ | Делюсь личным опытом',
        author: 'CheRa',
        verified: false,
        live: false,
        followers: '53,7 тыс. подписчиков'
    },
    {
        id: 12,
        video_src: 'https://www.youtube.com/watch?v=Azjzev9UmDc&ab_channel=GorkaGames',
        title: 'I Made Avatar but in Unreal Engine 5',
        author: 'Gorka Games',
        verified: false,
        live: false,
        followers: '7,85 тыс. подписчиков'
    },
    {
        id: 1,
        video_src: 'https://www.youtube.com/watch?v=NpQbEadBq_w&ab_channel=Settle',
        title: 'Chill Lofi Beats [chill lo-fi hip hop beats]',
        author: 'Lofi',
        verified: false,
        live: false
    },
    {
        id: 2,
        video_src: 'https://www.youtube.com/watch?v=9xBNj5g8hnw&ab_channel=DeepTunes',
        title: '2023 Lofi Beats 🎵 Lofi Hip Hop Mix ~ Calm Relaxing beats to start 2023 to',
        author: 'Lofi Mix',
        verified: true,
        live: true
    },
    {
        id: 3,
        video_src: 'https://www.youtube.com/watch?v=v4GIfNf7AYk&ab_channel=EdSheeran',
        title: 'Ed Sheeran – Castle On The Hill & Shape Of You feat. Stormzy [Live from the Brit Awards 2017]',
        author: 'Ed Sheeran',
        verified: true,
        live: false
    },
    {
        id: 4,
        video_src: 'https://www.youtube.com/watch?v=-5QkMlkCt08&ab_channel=ChauCodes',
        title: 'My 2023 Home Office Tour',
        author: 'Design Home',
        verified: true,
        live: false
    },
    {
        id: 5,
        video_src: 'https://www.youtube.com/watch?v=lyno2CZ5mrg&ab_channel=point',
        title: 'Цветная история или же 3 дня кранчей [Devlog]',
        author: 'Dev',
        verified: false,
        live: true
    },
    {
        id: 6,
        video_src: 'https://www.youtube.com/watch?v=zwujeo1MLJ8&ab_channel=SeanStudy',
        title: '9-Hour Study with Me | Pomodoro Timer, Lofi Relaxing Music | Day 102',
        author: 'Sean Study',
        verified: false,
        live: true,
        followers: '7,23 тыс. подписчиков'
    },
    {
        id: 7,
        video_src: 'https://www.youtube.com/watch?v=AkEnidfZnCU&t=20145s&ab_channel=SonnySangha',
        title: '9-Hour Study with Me | Pomodoro Timer, Lofi Relaxing Music | Day 102',
        author: 'Sangha',
        verified: false,
        live: true,
        followers: '7,23 тыс. подписчиков'
    },
    {
        id: 8,
        video_src: 'https://www.youtube.com/watch?v=jfKfPfyJRdk&ab_channel=LofiGirl',
        title: 'lofi hip hop radio - beats to relax/study to',
        author: 'Lofi Girl',
        verified: true,
        live: true,
        followers: '11,8 млн подписчиков'
    },
    {
        id: 9,
        video_src: 'https://www.youtube.com/watch?v=g2a5PmIhryA&ab_channel=DigitalDreams',
        title: '[8K60] 8K Zelda Botw RTX 4090 - Raytracing GI - Ultra graphic gameplay 2022 - NEW Extreme settings',
        author: 'Digital Dreams',
        verified: true,
        live: false,
        followers: '123 тыс. подписчиков'
    },
    {
        id: 10,
        video_src: 'https://www.youtube.com/watch?v=1aIOu5_u0Js&ab_channel=point',
        title: 'Месяц на разработку игры, третий гейм джем! [Devlog]',
        author: 'point',
        verified: false,
        live: false,
        followers: '6,76 тыс. подписчиков'
    },
    {
        id: 11,
        video_src: 'https://www.youtube.com/watch?v=Uw3dmMjNRXY&ab_channel=CheRa',
        title: 'Как я за год стал 3D художником с полного НУЛЯ | Делюсь личным опытом',
        author: 'CheRa',
        verified: false,
        live: false,
        followers: '53,7 тыс. подписчиков'
    },
    {
        id: 12,
        video_src: 'https://www.youtube.com/watch?v=Azjzev9UmDc&ab_channel=GorkaGames',
        title: 'I Made Avatar but in Unreal Engine 5',
        author: 'Gorka Games',
        verified: false,
        live: false,
        followers: '7,85 тыс. подписчиков'
    },

]

export const getStaticData = {
    panelTab,
    listVideos,
    submenu
}