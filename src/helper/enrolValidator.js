export default function enrolValidator(contact) {
    if (contact.substring(0, 2) >= 22) {
        const re = /^[0-9]{6}$/;
        return re.test(String(contact));
    } else {
        const re = /^[0-9]{12}$/;
        return re.test(String(contact));
    }
}
