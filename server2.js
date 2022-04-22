const path = require('path');
const favicon = require('express-favicon');
const express = require('express');
const RewriteMiddleware = require('express-htaccess-middleware');
const RewriteOptions = {
    file: path.resolve(__dirname, '.htaccess'),
    verbose: (process.env.ENV_NODE === 'false'),
    watch: (process.env.ENV_NODE === 'false'),
};

const app = express();

app.use(favicon(__dirname + '/icon/favicon.png'));

app.use(RewriteMiddleware(RewriteOptions));
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, )));

/*app.get('*', function(req, res){
    if (req.accepts('html')) {
        res.send('404', '<script>location.href = "/error/index.html";</script>');
        return;
    }
});
*/