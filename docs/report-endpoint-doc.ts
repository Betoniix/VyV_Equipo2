/**
 * @swagger
 * tags:
 *  name: report
 */

/**
 *  @swagger
 *  /report/:
 *  get:
 *      tags: [report]
 *      summary: Return the report of homeworks and attendances
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
 *                                          name:
 *                                              type: string
 *                                          paternalSurname:
 *                                              type: string
 *                                          maternalSurname:
 *                                              type: string
 *                                          career:
 *                                              type: string
 *                                          semester:
 *                                              type: string
 *                                          plate:
 *                                              type: string
 *                                          score:
 *                                              type: array
 *                                              items:
 *                                                  type: object
 *                                                  properties:
 *                                                      sessionName:
 *                                                          type: array
 *                                                          items:
 *                                                              type: object
 *                                                              properties:
 *                                                                  done:
 *                                                                      type: boolean
 *                                                                  type:
 *                                                                      type: string
 *                                                                  date:
 *                                                                      type: string
 *
 *
 *
 */
