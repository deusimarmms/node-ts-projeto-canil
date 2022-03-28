import {Router,Request,Response} from 'express'
import * as PageController from '../controllers/pageController'
import * as SarchController from '../controllers/searchController'
const router= Router();
/* Apontamento de rotas */
router.get('/',PageController.home)
router.get('/dogs',PageController.dogs)
router.get('/cats',PageController.cats)
router.get('/fishes',PageController.fishes)

router.get('/search',SarchController.search)









export default router;