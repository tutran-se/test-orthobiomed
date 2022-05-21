// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Cookies from "cookies";
export default function handler(req, res) {
  console.log(req.query);

  const cookies = new Cookies(req, res);
  cookies.set("tokens", JSON.stringify(req.query), {
    httpOnly: false, // true by default
  });

  res.redirect(307, "/");
}
