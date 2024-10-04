/**
 * @swagger
 * tags:
 *  name: signin
 */

/**
 *  @swagger
 *  /signin/:
 *  post:
 *      tags: [signin]
 *      summary: Verify user data and generate authentication tokens
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                          password:
 *                              type: string
 *      responses:
 *          200:
 *              description: Validated credentials and tokens generated
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: string
 *                                  description: The user's unique identifier
 *                              access:
 *                                  type: string
 *                                  description: The access token used for API requests.
 *
 */
