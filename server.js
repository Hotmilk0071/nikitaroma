const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const RewriteMiddleware = require('express-htaccess-middleware');
const RewriteOptions = {
    file: path.resolve(__dirname, '.htaccess'),
    verbose: (process.env.ENV_NODE === 'development'),
    watch: (process.env.ENV_NODE === 'development'),
};
const port = process.env.PORT || 3000;
const app = express();

app.use(favicon(__dirname + '/icon/favicon.png'));

app.use(RewriteMiddleware(RewriteOptions));





app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, )));


app.get('*', function(req, res){
    if (req.accepts('html')) {
        res.send('404', '<script>location.href = "/error/index.html";</script>');
        return;
    }
});



app.listen(port);