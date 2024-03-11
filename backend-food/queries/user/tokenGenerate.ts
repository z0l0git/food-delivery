import { tokenGenerate } from "../../utils";
import { Request, Response } from "express";
import { UserModel } from "../../models";
import NodeMailer from "nodemailer";

const getUserByEmail = async (email: string) => {
  const user = await UserModel.findOne({ email: email });
  return user;
};

export const generateToken = async (req: Request) => {
  const { email } = req.body;
  try {
    const user = await getUserByEmail(email);

    if (!user) {
      throw new Error("User not found");
    }
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const token = tokenGenerate(randomNum.toString());
    const transporter = NodeMailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: "zolbayar.in@gmail.com",
        pass: "ucmsgdmgdgvokfzq",
      },
    });
    const mailOptions = {
      from: "zolbayar.in@gmail.com",
      to: user.email,
      subject: "Password Reset Verification Code from Food-Delivery by Zolo",
      text: `Verification for ${user.email}
      Your code is: ${randomNum}`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email: ", error);
      } else {
        console.log("Email sent: ", info.response);
      }
    });

    return token;
  } catch (err) {
    console.log(err);
  }
};
