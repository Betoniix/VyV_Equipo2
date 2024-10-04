import { hashSync } from "bcrypt";
import client from "./util/prisma-client";
import { EnvLoader } from "./util/env-loader";
import { generate } from "generate-password";
import { DateHandler } from "./util/date-handler";

const Careers = [
  { id: 1, name: "Ing. Civil" },
  { id: 2, name: "Ing. Física" },
  { id: 3, name: "Ing. Mecatrónica" },
  { id: 4, name: "Ing. Energías renovables" },
];

const Semesters = [
  { id: 1, name: "Primero" },
  { id: 2, name: "Nivelación" },
];

const Roles = [
  { id: 1, name: "Administrator" },
  { id: 2, name: "Lender" },
];

const hashedAdminPassword = hashSync(
  EnvLoader.ADMIN_PASSWORD,
  EnvLoader.ROUNDS
);

export const LoadDefaultData = async () => {
  try {
    const totalNumberCareers = await client.careers.count();
    if (totalNumberCareers >= Careers.length)
      throw new Error("Careers alredy uploaded");

    for (let career of Careers) {
      await client.careers.upsert({
        where: { id: career.id },
        create: { ...career },
        update: { name: career.name },
      });
    }
    console.info("-- Careers Sucessfuly Uploaded --");
  } catch (error) {
    //  console.info(error);
  }

  try {
    const totalNumberSemesters = await client.semesters.count();

    if (totalNumberSemesters >= Semesters.length)
      throw new Error("Semesters alredy uploaded");

    for (let semester of Semesters) {
      await client.semesters.upsert({
        where: { id: semester.id },
        create: { ...semester },
        update: { name: semester.name },
      });
    }
    console.info("-- Semesters Sucessfuly Uploaded --");
  } catch (error) {
    //console.info(error);
  }

  try {
    const totalNumberRoles = await client.roles.count();
    if (totalNumberRoles >= Semesters.length)
      throw new Error("Roles alredy uploaded");

    for (let role of Roles) {
      await client.roles.upsert({
        where: { id: role.id },
        create: { ...role },
        update: { name: role.name },
      });
    }
    console.info("-- Roles Sucessfuly Uploaded --");
  } catch (error) {
    //console.info(error);
  }

  try {
    const totalNumberAdmins = await client.users.count({
      where: { id_role: 1 },
    });
    if (totalNumberAdmins >= 1) throw new Error("Admin alredy uploaded");

    for (let role of Roles) {
      await client.users.upsert({
        where: { id: EnvLoader.ADMIN_ID },
        create: {
          id: EnvLoader.ADMIN_ID,
          email: EnvLoader.ADMIN_EMAIL,
          password: hashedAdminPassword,
          id_role: 1,
          admins: { create: {} },
        },
        update: {
          email: EnvLoader.ADMIN_EMAIL,
          password: hashedAdminPassword,
        },
      });
    }
    console.info("-- Admin Sucessfuly Uploaded --");
  } catch (error) {
    // console.info(error);
  }

  try {
    const totalInvitations = await client.invitationcode.count({});
    if (totalInvitations >= 1) throw new Error("Admin alredy uploaded");

    const code = generate({
      length: 10,
      numbers: true,
      uppercase: true,
      lowercase: true,
    });

    const today = DateHandler.Today();

    await client.invitationcode.create({
      data: {
        active: true,
        code: code,
        expire: DateHandler.AddTime(today, { days: 15 }),
      },
    });

    console.info("-- Invitation Sucessfuly created --");
  } catch (error) {
    // console.info(error);
  }
};
