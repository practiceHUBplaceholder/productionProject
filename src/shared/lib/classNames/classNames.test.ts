import { ClassNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(ClassNames('class')).toBe('class');
    });
    test('with additional class', () => {
        expect(ClassNames('class', undefined, ['additional'])).toBe('class additional');
    });
    test('with mods', () => {
        expect(ClassNames('class', {
            red: true, blue: false, green: true, pink: undefined,
        })).toBe('class red green');
    });
    test('with additional class and mods', () => {
        expect(ClassNames('class', {
            red: true, blue: false, green: true, pink: undefined,
        }, ['additional'])).toBe('class additional red green');
    });
});
