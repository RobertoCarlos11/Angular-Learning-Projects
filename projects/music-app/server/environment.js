import dotenv from 'dotenv';
dotenv.config();

const {
    CLIENT_ID = 'default_client_id',
    CLIENT_SECRET = 'default'
} = process.env;

export const EnvConfig = () => ({
 CLIENT_ID: CLIENT_ID,
 CLIENT_SECRET: CLIENT_SECRET,
}); 