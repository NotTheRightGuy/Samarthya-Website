export default function enrolValidator(contact) {
    const re = /(?:\d{6}|\d{12})$/;
    return re.test(String(contact));
}
