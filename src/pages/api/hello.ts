// NOTE - This is a generic 'Hello World' style document autogenerated by NEXT JS on app creation

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';

export default function hello(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: 'Bambang' });
}
