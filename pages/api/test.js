export default function handlerRequests(request, response) {
    response.status(200).json({
        body: request.body,
        query: request.query,
        cookies: request.cookies,
        test: true,
    });
}