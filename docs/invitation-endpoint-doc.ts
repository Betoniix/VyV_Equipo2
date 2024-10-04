/**
 * @swagger
 * tags:
 *  name: invitation
 */

/**
 * @swagger
 * /invitation:
 *   get:
 *     tags: [invitation]
 *     summary: Obtiene el código de invitación.
 *     responses:
 *       '200':
 *         description: Devuelve el código de invitación.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: number
 *                       description: ID de la invitación.
 *                     code:
 *                       type: string
 *                       description: Código de la invitación.
 *                     expire:
 *                       type: string
 *                       format: date-time
 *                       description: Fecha de expiración de la invitación.
 */

/**
 * @swagger
 * /invitation/create:
 *   post:
 *     tags: [invitation]
 *     summary: Genera un nuevo código de invitación.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: number
 *                 description: ID para generar el código de invitación.
 *     responses:
 *       '200':
 *         description: Devuelve el nuevo código de invitación generado.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: number
 *                       description: ID de la invitación generada.
 *                     code:
 *                       type: string
 *                       description: Código de la invitación generada.
 *                     expire:
 *                       type: string
 *                       format: date-time
 *                       description: Fecha de expiración de la invitación generada.
 */
