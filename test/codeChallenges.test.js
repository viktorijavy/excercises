import isPalindrom from "../isPalindrom";
describe('Palindrom', () => {
    it('should check if the word is the same if reversed', () => {
        expect(isPalindrom('lagerregal')).to.equal("palindrom");
        expect(isPalindrom('Hello world')).to.equal("not palindrom");
    });

});