import { NextApiRequest, NextApiResponse } from 'next'

export default function getProvinceById(req:NextApiRequest, res:NextApiResponse) {
    if (req.method !== 'GET') res.status(500).json({message:'sorry we only accept GET request'})
        res.json({hello:req.query.id, message:'getProvinceById'})
}