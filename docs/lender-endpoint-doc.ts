/**
 * @swagger
 * tags:
 *  name: lender
 */

/**
 * @swagger
 * /lender/create:
 *  post:
 *      tags: [lender]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                          name:
 *                              type: string
 *      responses:
 *          200:
 *              description: Lender's account created
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: string
 *                                  description: The lender's unique identifier
 *                              name:
 *                                  type: string
 *                                  description: The lender's name.
 *                              email:
 *                                  type: string
 *                                  description: The lender's email
 */

/**
 * @swagger
 * /lender/update:
 *  put:
 *      tags: [lender]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          id:
 *                              type: string
 *                          email:
 *                              type: string
 *                          name:
 *                              type: string
 *      responses:
 *          200:
 *              description: Lender's account updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              data:
 *                                  type: boolean
 *                                  description: Indicates if the account was updated
 *
 */

/**
 * @swagger
 * /lender/delete:
 *  delete:
 *      summary: Lenders' ids to delete
 *      tags: [lender]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          lenders:
 *                              type: array
 *                              items:
 *                                  type: string
 *
 *      responses:
 *          200:
 *              description: Accounts was deleted
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              data:
 *                                  type: boolean
 *                                  description: Indicates if the update occurs
 *
 */

/**
 * @swagger
 * /lender/resend/{id}:
 *  post:
 *      tags: [lender]
 *      parameters:
 *         - name: id
 *           required: true
 *           description: Lender's id
 *      responses:
 *          200:
 *              description: Validated credentials and tokens generated
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              data:
 *                                  type: boolean
 *
 *
 */

/**
 * @swagger
 * /lender/account/{id}:
 *  get:
 *      tags: [lender]
 *      parameters:
 *         - name: id
 *           required: true
 *           description: Lender's id
 *      responses:
 *          200:
 *              description: Validated credentials and tokens generated
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              data:
 *                                  type: object
 *                                  properties:
 *                                      id:
 *                                          type: string
 *                                          description: The user's unique identifier
 *                                      name:
 *                                          type: string
 *                                          description: The lender's name.
 *                                      email:
 *                                          type: string
 *                                          description: The lender's email
 *
 */

/**
 * @swagger
 * /lender/accounts:
 *  get:
 *      tags: [lender]
 *      responses:
 *          200:
 *              description: Validated credentials and tokens generated
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              data:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          id:
 *                                              type: string
 *                                              description: The user's unique identifier
 *                                          name:
 *                                              type: string
 *                                              description: The lender's name.
 *                                          email:
 *                                              type: string
 *                                              description: The lender's email
 *
 */
