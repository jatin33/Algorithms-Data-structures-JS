function telephoneCheck(str) {
    // Good luck!
    const re = new RegExp(/^1?\s?(\(\d{3}\)|\d{3})\-?\s?\d{3}\s?\-?\d{4}$/, 'g');

    return re.test(str);
}

telephoneCheck("555-555-5555");