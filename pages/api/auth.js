// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Cookies from "cookies";
export default function handler(req, res) {
  console.log(process.env.NODE_ENV);
  const cookies = new Cookies(req, res);
  cookies.set("tokens", JSON.stringify(req.query), {
    httpOnly: process.env.NODE_ENV === "production" ? true : false, // true by default
    secure: process.env.NODE_ENV === "production" ? true : false, // true by default
    sameSite: "none",
  });

  res.redirect(307, "/");
}
