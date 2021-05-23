// ****************************************************************
// set up GET API
// Controller functions to get the requested data from the models, 
// create an HTML page displaying the data, and return it to the 
// user to view in the browser.
// ****************************************************************
import path from 'path';
const __dirname = path.resolve();

export const home = (req, res) => {
    var welcome_message = `Hello World! this is a node JS demo app`;
    res.send(welcome_message);
}
// show html page
export const homePage = (req, res) => {
    //show this file when the "/" is requested
    res.sendFile(__dirname+"/pages/home.html");
}
// get today's date
export const getTodayDate = (req, res) => {
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    var newdate = day+ "/" + month + "/" + year;

    res.json({
        today: newdate
    });
}
// get list of month names
export const getMonthsName = (req, res) => {
    res.json({
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December'
    });
}
// get list of ITOT Developers
export const getItotDevs = (req, res) => {
    res.json([
        {
            name: 'Yann Mulonda',
            title: 'Software Engineer'
        },
        {
            name: 'Bernard Ng',
            title: 'Software Developer'
        },
        {
            name: 'Clerc Kapema',
            title: 'Web Developer'
        },
        {
            name: 'Gloire Kafwalubi',
            title: 'Web Developer'
        }
    ]);
}
