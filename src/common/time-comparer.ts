export const TimeComparer = (a: Date, b: Date): number => {
    return a.getTime() - b.getTime();
};