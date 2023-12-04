import express from 'express';
import * as dotenv from 'dotenv';
import  OpenAIApi from 'openai';

dotenv.config()

const router = express.Router();

const openai = new OpenAIApi({apiKey : "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"});

router.route('/').get((req, res) => {
    res.status(200).json({message : "Hello from DALL.E Routes"})
})


router.route('/').post(async (req, res) => {
    const { prompt } = req.body;
    try {
        const response = await openai.createImage({
            prompt,
            n : 1,
            size : '1024x1024',
            response_format: 'b64_json'
        });

        const image =  response.data.data[0].b64_json;

        res.status(200).json({photot : image});

        // res.json(response.data.data[0].b64_json)
        // response.data.data[0].b64_json // when n = 1, when n=2 The best practice is to retrieve the URL links.
        // res.json(response.data.data.map(img => img.url))


    } catch (error) {
        console.error(error);
        res.status(500).json({message : "Something went wrong"})
    }
});

// router.route('/').post(async (req, res) => {
//     try {
//         const {prompt} = req.body;

//         const response = await openai. createImage({
//             prompt,
//             n : 1,
//             size : '1024x1024',
//             response_format: 'b64_json'
//         })

//         const image = response.data.data[0].b64_json;

//         res.status(200).json({photot : image});
        
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({message : "Something went wrong"})
//     }
//     res.status(200).json({message : "Hello from DALL.E Routes"})
// })

export default router;