const mongoose = require('mongoose');
const Contest = require('../models/contest-module');

async function seedContests() {
	const contests = [
        {
            contestId: '1',
            name: 'Космическая живопись',
            description: 'Создайте картину на тему космоса и продемонстрируйте свои творческие способности.',
            coverImage: 'https://avatars.mds.yandex.net/i?id=0700c7b1c58f31f37a00a21030c1ce17_l-7741114-images-thumbs&n=13',
            eventDateTime: new Date('2024-01-15T10:00:00Z'),
            rating: 4, // Рейтинг целое число от 1 до 5
            registeredCount: 20,
            remainingSlots: 30,
        },
        {
            contestId: '2',
            name: 'Космическое моделирование',
            description: 'Соберите модель космического корабля или планеты с помощью подручных материалов.',
            coverImage: 'https://avatars.mds.yandex.net/i?id=0700c7b1c58f31f37a00a21030c1ce17_l-7741114-images-thumbs&n=13',
            eventDateTime: new Date('2024-02-20T14:00:00Z'),
            rating: 5, // Рейтинг целое число от 1 до 5
            registeredCount: 15,
            remainingSlots: 25,
        },
        {
            contestId: '3',
            name: 'В космос на бумаге',
            description: 'Создайте свой космический корабль, используя только бумагу и клей.',
            coverImage: 'https://avatars.mds.yandex.net/i?id=0700c7b1c58f31f37a00a21030c1ce17_l-7741114-images-thumbs&n=13',
            eventDateTime: new Date('2024-03-10T08:00:00Z'),
            rating: 5, // Рейтинг целое число от 1 до 5
            registeredCount: 50,
            remainingSlots: 50,
        },
        {
            contestId: '4',
            name: 'Космический квест',
            description: 'Пройдите увлекательный квест, решая загадки на тему космоса.',
            coverImage: 'https://avatars.mds.yandex.net/i?id=0700c7b1c58f31f37a00a21030c1ce17_l-7741114-images-thumbs&n=13',
            eventDateTime: new Date('2024-04-05T12:00:00Z'),
            rating: 4, // Рейтинг целое число от 1 до 5
            registeredCount: 40,
            remainingSlots: 10,
        },
        {
            contestId: '5',
            name: 'Космическая викторина',
            description: 'Пройдите викторину на тему космоса и покажите свои знания.',
            coverImage: 'https://avatars.mds.yandex.net/i?id=0700c7b1c58f31f37a00a21030c1ce17_l-7741114-images-thumbs&n=13',
            eventDateTime: new Date('2024-05-12T18:00:00Z'),
            rating: 3, // Рейтинг целое число от 1 до 5
            registeredCount: 30,
            remainingSlots: 20,
        },
    ];
	try {
		

		await Contest.insertMany(contests);
		console.log('Contests seeded successfully');
	} catch (err) {
		console.error('Error seeding contests:', err);
	} finally {
		await mongoose.disconnect();
	}
}

module.exports = { seedContests };
