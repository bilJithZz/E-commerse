const express=require("express")
const router=express.Router()
const bcrypt = require('bcrypt');
const salt= 10;
const User = require("../Model/UserSchema");
const secret = 'hauanswjwkwskwkwjj';
var jwt = require('jsonwebtoken');

router.post('/register',async(req,res)=>{
    try
        {
        const {username,email,password}=req.body
        const hash =await bcrypt.hash(password, salt);
        const UserRegister=new User({username,email,password:hash})
        const saveUser=await UserRegister.save()
        res.status(200).json(saveUser)
    
    }
    catch
    (err)
    {
        res.status(405).json(err)
        console.log("err")
    }
})


router.post('/login', async (req, res) => {
    try {
      const { username, password } = req.body;
  
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
    const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return res.status(401).json({ message: 'Incorrect password' });
      }
  
      const token = jwt.sign({ id: user._id }, secret, { expiresIn: '3h' });
  
      const { password: userPassword, ...info } = user._doc;
  
      res.cookie('jwtToken', token).status(200).json(info);
    } catch (err) {
      res.status(500).json({ message: 'Internal server error', error: err.message });
    }
  });

module.exports=router;


