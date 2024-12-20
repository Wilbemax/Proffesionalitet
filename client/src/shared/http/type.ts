export type UserI = {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    familyPhoto: string;
    competitions: Record<number, string>;
    family: {
        [key: number]: {
            firstName: string;
            lastName: string;
            gender: string;
            age: number;
        };
    };
};

export type AuthResponse = {
    accessToken: string;
    refreshToken: string;
    user: UserI;
};

export type ContestI = {
    contestId: string;
    name: string;
    description: string;
    coverImage: string;
    eventDateTime: string; // ISO date string
    rating: number;
    registeredCount: number;
    remainingSlots: number;
};
