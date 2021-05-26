const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const User = require('../models').USER;
const user = require('../models/user');
const { verifyToken } = require('../middlewares/authorization');
const router = express.Router()
const SECRET_KEY = process.env.SECRET_KEY;

router.post('/login', async(req, res, next) =>{
  try{
      const users = await User.findOne({
        attribute: ['UID','PWD','AUTH'],
        where: {
            UID: req.body.username
        }
      })
      if(users == null)
      {
          res.status(400).json({ success: false, error: 'ID is not exist'})
      }
      else
      {
        if(await bcrypt.compare(req.body.password,users.PWD))
        {
          const id = users.UID
          const token = jwt.sign({
            id,
          }, process.env.SECRET_KEY,{
              expiresIn: '1h'
          })
          res.status(201).json({ success: true, error: null, token: token });
        }
        else
        {
          res.status(400).json({ success: false, error: 'Invalid Password'})
        }
      }
  } catch(error) {
    console.error(error)
    next(error)
  }
})

router.post('/create', async(req, res, next) => {
  try{
      const conUser = await User.findOne({
        attribute: ['UID','PWD','AUTH'],
        where: {
            UID: req.body.username,
        }
      })
      if(conUser == null)
      {
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(req.body.password,salt)

        const users = await User.create({
            UID: req.body.username,
            PWD: hash,
            AUTH: 0
          })
          res.status(201).json({ success: true, error: null})
      }
      else
      {
        res.status(400).json({ success: false, error: 'UID is exist'})
      }
  } catch(error) {
    console.error(error)
    next(error)
  }
})

module.exports = router;