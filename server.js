const express = require('express');
const favicon = require('express-favicon');
const http = express()
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


http.get('*', function(req, res) {
    res.redirect('https://' + req.headers.host + req.url);

    // Or, if you don't want to automatically detect the domain name from the request header, you can hard code it:
    // res.redirect('https://example.com' + req.url);
})

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, )));


app.get('*', function(req, res){
    if (req.accepts('html')) {
        res.send('404', '<script>location.href = "/error/index.html";</script>');
        return;
    }
});



app.listen(port);
