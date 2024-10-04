/**
 * @swagger
 * tags:
 *  name: inscription
 */

/**
 * @swagger
 * /inscription/create:
 *   post:
 *     summary: Registra una nueva cuenta de estudiante.
 *     tags: [inscription]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre del estudiante.
 *               fatherLastname:
 *                 type: string
 *                 description: Apellido paterno del estudiante.
 *               motherLastname:
 *                 type: string
 *                 description: Apellido materno del estudiante.
 *               plate:
 *                 type: string
 *                 description: Matrícula del estudiante.
 *               semester:
 *                 type: number
 *                 description: ID del semestre del estudiante.
 *               career:
 *                 type: number
 *                 description: ID de la carrera del estudiante.
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Correo electrónico del estudiante.
 *               invitation:
 *                 type: string
 *                 description: Código de invitación para el estudiante.
 *     responses:
 *       '200':
 *         description: Indica si el registro fue exitoso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: boolean
 *                   description: Indica si el registro fue exitoso (true) o no (false).
 */

/**
 * @swagger
 * /inscription/careers:
 *   get:
 *     summary: Obtiene todas las carreras disponibles.
 *     tags: [inscription]
 *     responses:
 *       '200':
 *         description: Devuelve todas las carreras disponibles.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: number
 *                         description: ID de la carrera.
 *                       name:
 *                         type: string
 *                         description: Nombre de la carrera.
 */

/**
 * @swagger
 * /inscription/semesters:
 *   get:
 *     tags: [inscription]
 *     summary: Obtiene todos los semestres disponibles.
 *     responses:
 *       '200':
 *         description: Devuelve todos los semestres disponibles.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: number
 *                         description: ID del semestre.
 *                       name:
 *                         type: string
 *                         description: Nombre del semestre.
 */
