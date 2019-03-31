import { Context } from 'aws-lambda';
import isNumber from 'is-number';

interface Request {
    name: string;
}

interface Response {
    id: string;
    name: string;
}

export const handler = async (request: Request, context: Context | undefined): Promise< Response> => {

    const name = request.name;
    if (!isNumber(name)) {
        return {
            id: 'UUID',
            name: request.name
        }
    } else {
        return {
            id: 'NUMBER',
            name: request.name
        }
    }
};
