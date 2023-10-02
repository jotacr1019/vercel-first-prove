export default function handlerRequest(request, response) {
    response.status(200).json({
        body: request.body,
        query: request.query,
        cookies: request.cookies,
        productId: true,
    });
}