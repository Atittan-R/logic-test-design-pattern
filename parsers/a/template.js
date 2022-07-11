class ParserManager {
    constructor() {
        this.parsers = {};
    }

    addParser(name, parser) {
        this.parsers[name] = parser;
    }

    getParser(name) {
        return this.parsers[name];
    }
}