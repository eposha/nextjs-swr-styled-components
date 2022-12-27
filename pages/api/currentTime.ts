import type { NextApiRequest, NextApiResponse } from 'next';
import { DateTime } from 'luxon';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ currentTime: string } | string>,
) => {
  try {
    return res
      .status(200)
      .json({ currentTime: DateTime.now().toFormat(`HH 'hours' mm 'minutes and' ss 'seconds'`) });
  } catch (error) {
    const message = 'Unknown Error';

    const isError = error instanceof Error;

    res.status(500).json(isError ? error.message : message);
  }
};

export default handler;
