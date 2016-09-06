var resUtil = require('./ResponseUtil.js');
var serverLogger = require('./ServerLogger.js');
var logger = serverLogger.createLogger('AuthCheck.js');
/**
 * @returns  next if authorized otherwise unauthorization error
 */
function authCheck(permission) {
    function checkAuth(req, res, next) {
        var userAuthed, i;
        var authUser = req.params.authUser;
        var authUserPermissions = authUser ? authUser.permissions : null;

        //do we need support array here
        var allowPermission = permission;
        userAuthed = authUser && (!allowPermission);

        //further check
        if (userAuthed == false && allowPermission) {
            if (authUserPermissions != null && authUserPermissions.length > 0) {
                for (i = 0; i < authUserPermissions.length; i++) {
                    if (authUserPermissions[i] == allowPermission) {
                        userAuthed = true;
                        break;
                    }
                }
            }
        }
        if (userAuthed) {
            //logger.info("user authenticated: "+userId);
            return next();
        } else {
            logger.info("user not authenticated");
            return resUtil.resNoAuthorizedError(null, res, next);
        }
    }
    return (checkAuth);
}

module.exports = {authCheck:authCheck};
