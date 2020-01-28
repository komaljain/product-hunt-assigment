import moment from 'moment';

export const DateUtils = {
    convertUTCStringToFormattedDate,
    convertDateToFormattedDate,
    diffFromNow
};

function convertUTCStringToFormattedDate(strDate, format) {
    return moment(new Date(strDate)).format(format);
}

function convertDateToFormattedDate(date, format) {
    return moment(date).format(format);
}

function diffFromNow(date) {
    return moment(date).fromNow();
}