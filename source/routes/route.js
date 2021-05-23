// *******************************************************************
// set up GET API routing
// "Routes" to forward the supported requests (and any information 
// encoded in request URLs) to the appropriate controller functions.
// *******************************************************************

// import my GET API from the controller functions
import { 
    home,
    homePage,
    getTodayDate,
    getMonthsName,
    getItotDevs 
} from '../controller/controller.js';

// set up the routing
const routes = (app) => {
    // home page
    app.route('/')
        .get(homePage)
        
    // GET home page.
    app.route('/home')
        .get(home)
    
    // Get today's date
    app.route('/today')
        .get(getTodayDate)

    // get list of month names
    app.route('/months')
        .get(getMonthsName)

    // get list of ITOT Devs
    app.route('/devs')
        .get(getItotDevs)
}

// export the route
export default routes;