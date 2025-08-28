export async function termsRoutes(server, options) {
    const { Term } = server.models;

    server.get('/terms/:language', async (request, reply) => {
        const { language } = request.params;
        const terms = await Term.findOne({ where: { language } });
        if (!terms) {
            return reply.code(404).send({ error: 'Not Found' });
        }
        return terms;
    });
}