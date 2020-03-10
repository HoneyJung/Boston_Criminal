module.exports = function (app) {
    app.get('/index', function (req, res) {
        res.render('index.html')
    });
    app.get('/about-us', function (req, res) {
        res.render('about-us.html');
    });
    app.get('/blog-details', function (req, res) {
        res.render('blog-details.html')
    });
    app.get('/blog', function (req, res) {
        res.render('blog.html')
    });
    app.get('/contact', function (req, res) {
        res.render('contact.html')
    });
    app.get('/items', function (req, res) {
        res.render('items.html')
    });
    app.get('/login', function (req, res) {
        res.render('login.html')
    });
    app.get('/trash', function (req, res) {
        res.render('trash.html')
    });
}