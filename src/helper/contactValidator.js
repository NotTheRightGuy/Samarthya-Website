export default function phoneNumberValidator(contact) {
    const re = /^[0-9]{10}$/;
    return re.test(String(contact));
}
