import { NextApiRequest, NextApiResponse } from 'next'

export default function getCities(req:NextApiRequest,res:NextApiResponse) {
    if (req.method !== 'GET') res.status(500).json({message:'Only GET requests'})
    res.json([{id:'1',name:'Montreal',province:'Quebec'},{id:'2',name:'Toronto',province:'Ontario'}])
}