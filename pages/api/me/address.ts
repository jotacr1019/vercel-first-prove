const send = require("micro");
const methods = require("micro-method-router");
import type { NextApiRequest, NextApiResponse } from "next";

export default methods({
    async patch(req: NextApiRequest, res: NextApiResponse) {
        res.status(200).json({
            body: req.body,
            query: req.query,
            cookies: req.cookies,
            me_address: true,
        });
    },
});
