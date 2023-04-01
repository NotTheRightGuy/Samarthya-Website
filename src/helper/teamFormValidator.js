import contactValidator from "../helper/contactValidator";
import enrolValidator from "../helper/enrolValidator";

export default function teamFormValidator(
    teamName,
    teamMember1,
    teamMember2,
    teamMember3,
    teamMember4
) {
    let msg = "";
    if (teamName === "") {
        msg = "Team name is required";
        return msg;
    } else if (
        teamMember1[0] == "" ||
        teamMember1[1] == "" ||
        teamMember1[2] == ""
    ) {
        msg = "Team member 1 details are required";
        return msg;
    } else if (
        teamMember2[0] == "" ||
        teamMember2[1] == "" ||
        teamMember2[2] == ""
    ) {
        msg = "Team member 2 details are required";
        return msg;
    }
    if (!contactValidator(teamMember1[1])) {
        msg = "Team member 1 phone number is invalid";
        return msg;
    }
    if (!contactValidator(teamMember2[1])) {
        msg = "Team member 2 phone number is invalid";
        return msg;
    }
    if (!enrolValidator(teamMember1[2])) {
        msg = "Team member 1 enrol is invalid";
        return msg;
    }
    if (!enrolValidator(teamMember2[2])) {
        msg = "Team member 2 enrol is invalid";
        return msg;
    }
    if (teamMember3[0] != "" || teamMember3[1] != "" || teamMember3[2] != "") {
        if (!contactValidator(teamMember3[1])) {
            msg = "Team member 3 phone number is invalid";
            return msg;
        }
        if (!enrolValidator(teamMember3[2])) {
            msg = "Team member 3 enrol is invalid";
            return msg;
        }
    }
    if (teamMember4[0] != "" || teamMember4[1] != "" || teamMember4[2] != "") {
        if (!contactValidator(teamMember4[1])) {
            msg = "Team member 4 phone number is invalid";
            return msg;
        }
        if (!enrolValidator(teamMember4[1])) {
            msg = "Team member 4 enrol is invalid";
            return msg;
        }
    }
    return msg;
}
