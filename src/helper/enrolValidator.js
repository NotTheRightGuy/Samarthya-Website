export default function enrolValidator(contact) {
    const re = /^[0-9]{12}$/;
    return re.test(String(contact));
}
