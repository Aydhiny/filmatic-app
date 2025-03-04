import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { title, description, releaseYear, trailerUrl, userId } = req.body;
      if (!userId) {
        return res.status(400).json({ error: 'User not authenticated' });
      }

      const newFilm = await prisma.film.create({
        data: {
          title,
          description,
          releaseYear,
          trailerUrl,
          userId,
        },
      });

      res.status(201).json(newFilm); 
    } catch (error) {
      console.error('Error creating film:', error);
      res.status(500).json({ error: 'Something went wrong while uploading the film' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
