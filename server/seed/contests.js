const mongoose = require('mongoose');
const Contest = require('../models/contest-module');

async function seedContests() {
	const contests = [
		{
			contestId: '1',
			name: 'Art Competition',
			description:
				'Showcase your artistic talents in this exciting competition.',
			coverImage: 'https://example.com/images/art.png',
			eventDateTime: new Date('2024-01-15T10:00:00Z'),
			rating: 4.5,
			registeredCount: 20,
			remainingSlots: 30,
		},
		{
			contestId: '2',
			name: 'Science Fair',
			description: 'Present your innovative science projects.',
			coverImage: 'https://example.com/images/science.png',
			eventDateTime: new Date('2024-02-20T14:00:00Z'),
			rating: 4.8,
			registeredCount: 15,
			remainingSlots: 25,
		},
		{
			contestId: '3',
			name: 'Coding Hackathon',
			description: 'Solve challenging coding problems and win prizes.',
			coverImage: 'https://example.com/images/coding.png',
			eventDateTime: new Date('2024-03-10T08:00:00Z'),
			rating: 5.0,
			registeredCount: 50,
			remainingSlots: 50,
		},
		{
			contestId: '4',
			name: 'Photography Contest',
			description: 'Capture the best moments through your lens.',
			coverImage: 'https://example.com/images/photography.png',
			eventDateTime: new Date('2024-04-05T12:00:00Z'),
			rating: 4.7,
			registeredCount: 40,
			remainingSlots: 10,
		},
		{
			contestId: '5',
			name: 'Music Battle',
			description: 'Showcase your musical skills in front of a live audience.',
			coverImage: 'https://example.com/images/music.png',
			eventDateTime: new Date('2024-05-12T18:00:00Z'),
			rating: 4.9,
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
