import {Router, Response, Request} from 'express';
import * as uuid from 'node-uuid';

const emailRouter: Router = Router();

emailRouter.post('/', (request: Request, response: Response) => {

    response.json({
        id: uuid.v4(),
        text: request.body.toField,
        ccField: request.body.ccField,
        bccField: request.body.bccField,
        subject: request.body.subject,
        emailBodyText: request.body.emailBodyText
    });

    /* toField: ['muthu@gmail.com,muthu1@gmail.com', Validators.required],
     ccField: [''],
     bccField: [''],
     subject: ['test'],
     emailBodyText:*/
});

emailRouter.post('/:id/comment', (request: Request, response: Response) => {

    const feedID = request.params.id;

    response.json({
        id: feedID,
        comment: {
            id: uuid.v4(),
            text: request.body.text
        }
    });

});

emailRouter.delete('/:id', (request: Request, response: Response) => {

    response.json({
        id: request.params.id
    });

});

export {emailRouter}
