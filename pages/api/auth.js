// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Cookies from "cookies";
export default function handler(req, res) {
  console.log(process.env.NODE_ENV);
  const cookies = new Cookies(req, res);
  console.log("Before");
  cookies.set("tokens", JSON.stringify(req.query), {
    httpOnly: true,
    sameSite: "none",
  });
  console.log("After");
  res.redirect(307, "/");
}
