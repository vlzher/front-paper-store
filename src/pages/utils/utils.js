export function statusToText(status){
    switch(status){
        case "IN_PROGRESS":
            return "W trakcie";
        case "WAITING_FOR_REVIEW":
            return "Odebrane";
        case "COMPLAINT_APPROVED":
            return "Zaakceptowane";
        case "COMPLAINT_REJECTED":
            return "Odrzucone";
        case "COMPLETED":
            return "Zakończone";
        default:
            return "Nieznany";
    }
}

export function statusToColor(status){
    switch(status){
        case "IN_PROGRESS":
            return "text-yellow-500";
        case "WAITING_FOR_REVIEW":
            return "text-blue-500";
        case "COMPLAINT_APPROVED":
            return "text-green-500";
        case "COMPLAINT_REJECTED":
            return "text-red-500";
        case "COMPLETED":
            return "text-green-500";
        default:
            return "text-gray-500";
    }
}