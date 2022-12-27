import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse<string>) => {
  if (req.query.secret !== 'secretPath') {
    return res.status(403).json('Invalid token');
  }

  const path = req.query.path;
  try {
    if (typeof path !== 'string') {
      return res.status(403).json('Path is required');
    }
    await res.revalidate(path);

    return res.status(200).json('Revalidated');
  } catch (error) {
    const message = 'Unknown Error';

    const isError = error instanceof Error;

    res.status(500).json(isError ? error.message : message);
  }
};

export default handler;
