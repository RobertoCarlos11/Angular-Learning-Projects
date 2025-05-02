import express from 'express';
import cors from 'cors';
import { EnvConfig } from './environment.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/bearer/token', async (req,res) => 
{
    const { CLIENT_ID, CLIENT_SECRET } = EnvConfig();

    try
    {
        const response = await fetch("https://accounts.spotify.com/api/token",{
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                grant_type: "client_credentials",
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET
            })
        })
        const data = await response.json();
        if (!response.ok) 
        {
            return res.status(response.status).json({ error: data.error_description });
        }
        return res.status(200).json({ access_token: data.access_token });        
    }
    catch (error) 
    {
        console.error('Error fetching token:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.listen(3000, () => 
{
    console.log('Server is running on port 3000');
});