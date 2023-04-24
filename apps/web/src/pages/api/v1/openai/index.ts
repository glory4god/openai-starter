// import { NextApiRequest, NextApiResponse } from 'next';
// import prisma from '@/backend/lib/prisma';

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse,
// ) {
//   const method = req.method;
//   if (method === 'GET') {
//     const { subjectId } = req.query;
//     const pastQuestions = await prisma?.pastQuestion.findMany({
//       where: {
//         subjectId: subjectId ? Number(subjectId) : undefined,
//       },
//       include: {
//         _count: {
//           select: {
//             questions: true,
//           },
//         },
//       },
//     });

//     return res.status(200).json(pastQuestions);
//   }
// }
