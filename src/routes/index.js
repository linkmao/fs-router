import express from 'express'
const {Router} = express
const router=Router()

router.get('/', (req,res)=> res.render('index',{messagge:"Radiohead Home", name:"Maolink"}))
router.get('/about', (req,res)=> res.render('about'))
router.get('/contact', (req,res)=> res.render('contact'))

export default router