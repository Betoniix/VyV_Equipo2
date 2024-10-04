/**
 * @swagger
 * tags:
 *  name: session
 *  description: Endpoints for managing sessions
 */

/**
 * @swagger
 * /session/create:
 *  post:
 *      tags: [session]
 *      summary: Create a new session
 *      description: This endpoint creates a new session with the provided details.
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              description: The name of the session
 *                          date:
 *                              type: string
 *                              format: date
 *                              description: The date of the session
 *                          startTime:
 *                              type: string
 *                              format: date-time
 *                              description: The start time of the session
 *                          endTime:
 *                              type: string
 *                              format: date-time
 *                              description: The end time of the session
 *      responses:
 *          200:
 *              description: Successfully created a new session
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              id:
 *                                  type: integer
 *                                  description: The unique identifier of the session
 *                              name:
 *                                  type: string
 *                                  description: The name of the session
 *                              date:
 *                                  type: string
 *                                  format: date
 *                                  description: The date of the session
 *                              startTime:
 *                                  type: string
 *                                  format: date-time
 *                                  description: The start time of the session
 *                              endTime:
 *                                  type: string
 *                                  format: date-time
 *                                  description: The end time of the session
 */

/**
 * @swagger
 * /session/update:
 *  put:
 *      tags: [session]
 *      summary: Update an existing session
 *      description: This endpoint updates an existing session with the provided details.
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          id:
 *                              type: integer
 *                              description: The unique identifier of the session
 *                          name:
 *                              type: string
 *                              description: The new/old name of the session
 *                          date:
 *                              type: string
 *                              format: date
 *                              description: The new/old date of the session
 *                          startTime:
 *                              type: string
 *                              format: date-time
 *                              description: The new/old start time of the session
 *                          endTime:
 *                              type: string
 *                              format: date-tim
 *                              description: The new/old end time of the session
 *      responses:
 *          200:
 *              description: Successfully updated the session
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              data:
 *                                  type: boolean
 *                                  description: Indicates if the session was updated
 *
 */

/**
 * @swagger
 * /session/delete:
 *  delete:
 *      tags: [session]
 *      summary: Delete one or more sessions
 *      description: This endpoint deletes one or more sessions with the provided IDs.
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          ids:
 *                              type: array
 *                              items:
 *                                  type: integer
 *                              description: An array of session IDs to be deleted
 *
 *      responses:
 *          200:
 *              description: Sessions were successfully deleted
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              data:
 *                                  type: boolean
 *                                  description: Indicates if the deletion was successful
 *
 */

/**
 * @swagger
 * /session/homework:
 *  post:
 *      tags: [session]
 *      summary: Add homework results for a session
 *      description: This endpoint adds homework results details for a specific session.
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
 *                          plates:
 *                              type: array
 *                              items:
 *                                  type: string
 *                              description: An array of student's plate, who made their homework
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
 *                                  description: Indicates if the homework was added successfully
 *
 *
 */

/**
 * @swagger
 * /session/{id}:
 *  get:
 *      tags: [session]
 *      summary: Get details of a specific session
 *      description: This endpoint retrieves the details of a specific session.
 *      parameters:
 *         - name: id
 *           required: true
 *           description: The unique identifier of the session
 *      responses:
 *          200:
 *              description: Successfully retrieved session details
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
 *                                          description: The unique identifier of the session
 *                                      name:
 *                                          type: string
 *                                          description: The name of the session
 *                                      email:
 *                                          type: string
 *                                          description: The email associated with the session
 *
 */

/**
 * @swagger
 * /session/:
 *  get:
 *      tags: [session]
 *      summary: Get all available sessions
 *      description: This endpoint retrieves a list of all available sessions.
 *      responses:
 *          200:
 *              description: Successfully retrieved all sessions
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
 *                                              description: The unique identifier of the session
 *                                          name:
 *                                              type: string
 *                                              description: The name of the session
 *                                          email:
 *                                              type: string
 *                                              description: The email associated with the session
 *
 */
