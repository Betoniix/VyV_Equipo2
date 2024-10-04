/**
 * @swagger
 * tags:
 *  name: student
 */

/**
 * @swagger
 * /student/update:
 *  put:
 *      tags: [student]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          id:
 *                              type: number
 *                          email:
 *                              type: string
 *                          name:
 *                              type: string
 *                          paternalSurname:
 *                              type: string
 *                          maternalSurname:
 *                              type: string
 *                          semesterID:
 *                              type: number
 *                          careerID:
 *                              type: number
 *                          plate:
 *                              type: string
 *
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
 * /student/delete:
 *  delete:
 *      summary: Student' ids to delete
 *      tags: [student]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          students:
 *                              type: array
 *                              items:
 *                                  type: number
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
 * /student/resend:
 *  post:
 *      tags: [student]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          id:
 *                              type: number
 *      responses:
 *          200:
 *              description: Student QR resend was successfully
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
 * /student/account/{id}:
 *  get:
 *      tags: [student]
 *      parameters:
 *         - name: id
 *           required: true
 *           description: Student's id
 *      responses:
 *          200:
 *              description: Retrieve student data
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              data:
 *                                  type: object
 *                                  properties:
 *                                      id:
 *                                          type: number
 *                                      email:
 *                                          type: string
 *                                      name:
 *                                          type: string
 *                                      paternalSurname:
 *                                          type: string
 *                                      maternalSurname:
 *                                          type: string
 *                                      semester:
 *                                          type: object
 *                                          properties:
 *                                              id:
 *                                                  type: number
 *                                              name:
 *                                                  type: string
 *                                      career:
 *                                          type: object
 *                                          properties:
 *                                              id:
 *                                                  type: number
 *                                              name:
 *                                                  type: string
 *                                      plate:
 *                                          type: string
 *
 */

/**
 * @swagger
 * /student/accounts:
 *  get:
 *      tags: [student]
 *      responses:
 *          200:
 *              description: Retrieve all students data
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
 *                                              type: number
 *                                          email:
 *                                              type: string
 *                                          name:
 *                                              type: string
 *                                          paternalSurname:
 *                                              type: string
 *                                          maternalSurname:
 *                                              type: string
 *                                          semester:
 *                                              type: object
 *                                              properties:
 *                                                  id:
 *                                                      type: number
 *                                                  name:
 *                                                      type: string
 *                                          career:
 *                                              type: object
 *                                              properties:
 *                                                  id:
 *                                                      type: number
 *                                                  name:
 *                                                      type: string
 *                                          plate:
 *                                              type: string
 *
 */
