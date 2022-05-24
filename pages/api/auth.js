// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { serialize } from "cookie";

export default function handler(req, res) {
  const objectString = JSON.stringify({ token: "test" });
  res.setHeader(
    "Set-Cookie",
    serialize("token", objectString, {
      path: "/",
      sameSite: "none",
      secure: true,
    })
  );
  res.redirect(307, "/");
}
