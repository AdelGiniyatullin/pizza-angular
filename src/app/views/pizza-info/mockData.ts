export type MockData = {
    title: string;
    description: string;
    img: string;
};

export const data: Array<MockData> = [
    {
        title: 'Лучшее тесто',
        description: 'Мы создаем тесто только из отборной итальянской муки наивысшего качества',
        img: '../../assets/images/testo.png',
    },
    {
        title: 'Лучшие повара',
        description: 'Пиццы готовят самые профессиональные итальянские повара',
        img: '../../assets/images/cook.png',
    },
    {
        title: 'Гарантия качества',
        description: 'Наша пиццерия получила множество наград и признаний по всему миру',
        img: '../../assets/images/timer.png',
    },
    {
        title: 'Отборные рецепты',
        description: 'Мы используем рецепты от мировых лидеров в изготовлении пиццы',
        img: '../../assets/images/receipt.png',
    },
];