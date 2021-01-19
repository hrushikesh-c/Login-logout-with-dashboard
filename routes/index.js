const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const collectedData = require('../models/collected_data');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

router.get('/save', (req,res) => {
  console.log(req.query.email);
  console.log(req.query.html);
  var newData = new collectedData({
    email: req.query.email,
    HTML: req.query.html
  });

  collectedData.findOne({email: req.query.email}, function(err, data) {
    if(!err) {
      if(!data) {
        data = newData;
      } else {
        data.HTML = req.query.html;
      }
      data.save(function(err) {
        if (err) return res.send(500,{error: err});
      });
    }
  });

  collectedData.find({}, function (err, users) {
    var total = 0;
    var greater = 0;
    if (err) {
        console.log(err);
        res.send(err);
    } else {
        users.forEach(user => {
          total++;
          if(user.HTML > req.query.html){
            greater++;
          }
        });
        console.log(total);
        console.log(greater)
        var percentile = ((total - greater)/total)*100;
        res.send({"percentile" : percentile});
    }
  });
});

module.exports = router;