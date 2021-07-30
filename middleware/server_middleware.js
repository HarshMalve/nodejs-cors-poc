const app = require('express')();
// const cors = require('cors');
const allowlist = ['http://something.com', 'http://example.com', 'devlearner'];

exports.corsOptionsDelegate = (req, res, next) => {
    try {
        let corsOptions;
        let subDomain;
        let isRefererAllowed = allowlist.indexOf(req.get('referer')) !== -1; //check if referer is present in the request and allowList Array
    
        if(req.get('origin')) {
            subDomain = req.get('origin').split('https://')[1].split('.')[0]; // Splitting the req.origin to get subdomain and storing it in a variable
        }
        let isSubDomainAllowed = allowlist.indexOf(subDomain) !== -1; //check if subdomain is present in the request and allowList Array
    
        if (isRefererAllowed || isSubDomainAllowed) { //Check if referer is in the allowed list or if the domain is in the allowed list
            // Enable CORS for this request
            return next(); // Forward the process to the requested API function
        } else {
            // Disable CORS for this request
            corsOptions = { origin: false, status: 403, error: 'This domain does not have access to the requested resource' }
            res.status(403).json({
                corsOptions
            });
            res.end(); //End the process of req-res
        }        
    } catch (error) {
        res.status(500).send(`Internal Server Error`);
        throw new Error(`Error occurred  ${error}`);
    }
}

// app.use(cors(corsOptionsDelegate));
