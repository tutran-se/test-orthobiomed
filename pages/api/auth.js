// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Cookies from "cookies";
export default function handler(req, res) {
  console.log(process.env.NODE_ENV);
  const cookies = new Cookies(req, res);
  const secure = true;
  cookies.set("tokens", JSON.stringify(req.query), {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });

  res.redirect(307, "/");
}
