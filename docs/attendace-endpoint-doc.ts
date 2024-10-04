/**
 * @swagger
 * tags:
 *  name: attendance
 *  description: Endpoints for managing sessions
 */

/**
 * @swagger
 * /attendance/create:
 *  post:
 *      tags: [attendance]
 *      summary: Register a new attendance
 *      description: This endpoint register a new attendance
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          sessionID:
 *                              type: number
 *                              description: The unique identifier of the session
 *                          studentID:
 *                              type: number
 *                              description: The unique identifier of a student
 *
 *      responses:
 *          200:
 *              description: Homework was successfully added for the session
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              data:
 *                                  type: boolean
 *                                  description: Indicates if the register was added successfully
 *
 *
 */

/**
 * @swagger
 * /attendance/student/{encrypted}:
 *  get:
 *      tags: [attendance]
 *      summary: Get details of a student
 *      description: This endpoint retrieves the details of a student
 *      parameters:
 *         - name: encrypted
 *           required: true
 *           description: The QR data from student photo
 *      responses:
 *          200:
 *              description: Successfully retrieved student details
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
 *                                          description: The unique identifier of a student
 *                                      name:
 *                                          type: string
 *                                          description: The name of a student
 *                                      paternalSurname:
 *                                          type: string
 *                                          description: The paternalSurname from a student
 *                                      maternalSurname:
 *                                          type: string
 *                                          description: The maternalSurname from a student
 *
 */

/**
 * @swagger
 * /attendance/session:
 *  get:
 *      tags: [attendance]
 *      summary: Get the current session
 *      description: This endpoint retrieves the current session
 *      responses:
 *          200:
 *              description: Successfully retrieved the session
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              data:
 *                                  type: object
 *                                  properties:
 *
 *                                      id:
 *                                          type: string
 *                                          description: The unique identifier of the session
 *                                      name:
 *                                          type: string
 *                                          description: The name of the session
 *
 *
 */
