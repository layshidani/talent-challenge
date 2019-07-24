const validatePhone = (phoneNumber) => {
    var regex = /(\(?\d{2}\)?\d{4,5}\-?\d{4})/;
    const match = regex.exec(phoneNumber);
    console.log(match);
    if (match.input === match[0]){
        return match[0];
    }
};

export default validatePhone;