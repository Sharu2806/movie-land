import { getImagePath } from '../helpers';

describe('Get correct Image path', () => {
    it('Should get correct path image path', () => {
        const imgPath = "/test";
        const fullImagePath = getImagePath(imgPath);
        expect(fullImagePath).toBe("https://image.tmdb.org/t/p/w220_and_h330_face/test");
    });
});