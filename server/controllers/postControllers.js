const mongoose = require('mongoose')
const express= require('express')
const asyncHandler = require('express-async-handler')
const Crypto =require('crypto')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const config = require('config')

const { UserPost } = require('../models/userPost')
const { User } = require('../models/user')




//TODO @des     Get Posts
//TODO @route   GET /api/posts
//TODO @access  Private
const getPosts = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get Posts'})
})

//TODO @des     Post Posts
//TODO @route   POST /api/posts
//TODO @access  Private
const createPost = asyncHandler(async (req, res) => {
    if (!req.body.text) {
      res.status(400)
      throw new Error('Please add a text field')
    }
  
    // const post = await UserPost.create({
    //   text: req.body.text,
    // //   user: req.user._id,
    // })
    // console.log(post)
  
    res.status(200).json(post)
  })

//TODO @des     Update Posts
//TODO @route   PUT /api/posts/:id
//TODO @access  Private
const updatePost = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { product, leakedInfo, releaseDate, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, product, leakedInfo, releaseDate, tags, selectedFile, _id: id };

    await UserPost.findByIdAndUpdate(id, updatedPost, { new: true });

    res.status(200).json({ message: `Updated post ${req.params.id}` })
})

//TODO @des     Delete Posts
//TODO @route   DELETE /api/posts/:id
//TODO @access  Private
const deletePost = asyncHandler(async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await UserPost.findByIdAndRemove(id);

    res.status(200).json({ message: `Deleted post ${req.params.id}` })
})

//TODO @des     Post comment on Posts
//TODO @route   POST /api/posts
//TODO @access  Private
const commentPost = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { comments }   = req.body;
    

    console.log(comments)

    const post = await UserPost.findById(id);
    

    post.comments.push(comments);
    console.log(post)

    const updatedPost = await UserPost.findByIdAndUpdate(id, post, { new: true });

    res.json(updatedPost);
});

module.exports = { 
    getPosts, 
    createPost, 
    updatePost, 
    commentPost, 
    deletePost
};