import {Router, Request, Response} from 'express'

const router = Router();

router.get('/teste', (req: Request, res: Response) => {
    throw new Error('Error during processing request')
});

export { router };