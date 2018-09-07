const express = require('express');
const validate = require('express-validation');

const controller = require('../controllers/picture.controller');
const validations = require('../validations/picture.validation');

const router = express.Router();

router
  .route('/')
  /**
   * @api {get} v1/pictures List
   * @apiDescription Get a list of Flickr's latest pictures
   * @apiVersion 1.0.0
   * @apiName ListPictures
   * @apiGroup Picture
   *
   *
   * @apiParam  {Number{1-}} [page=1] Page
   * @apiParam  {Number{1-100}} [limit=1] Limit
   *
   * @apiSuccess {Number} page Current page
   * @apiSuccess {Number} pages Total pages
   * @apiSuccess {Number} perpage Limit
   * @apiSuccess {Number} total Total pictures
   * @apiSuccess {Object[]} photo List of pictures
   *
   * @apiError (Bad Request 400) Error Bad pararmeters
   */
  .get(validate(validations.list), controller.list);

module.exports = router;
