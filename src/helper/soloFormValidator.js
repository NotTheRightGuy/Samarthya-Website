import contactValidator from "./contactValidator";
import enrolValidator from "./enrolValidator";
import emailValidator from "./emailValidator";

export default function soloFormValidator(
    firstName,
    lastName,
    soloEnrol,
    soloEmail,
    soloContact
) {
    let msg = "";

    if (!firstName) {
        msg = "First name is required";
        return msg;
    }

    if (!lastName) {
        msg = "Last name is required";
        return msg;
    }

    if (!soloEnrol) {
        msg = "Enrolment number is required";
        return msg;
    } else if (!enrolValidator(soloEnrol)) {
        msg = "Invalid enrolment number";
        return msg;
    }

    if (!soloEmail) {
        msg = "Email is required";
        return msg;
    } else if (!emailValidator(soloEmail)) {
        msg = "Invalid email";
        return msg;
    }

    if (!soloContact) {
        msg = "Contact number is required";
        return msg;
    } else if (!contactValidator(soloContact)) {
        msg = "Invalid contact number";
        return msg;
    }

    return msg;
}
