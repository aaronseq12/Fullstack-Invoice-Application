export async function pricelistRoutes(server, options) {
    const { PricelistItem } = server.models;

    server.get('/pricelist', async (request, reply) => {
        const items = await PricelistItem.findAll();
        return items;
    });

    server.put('/pricelist/:id', async (request, reply) => {
        const { id } = request.params;
        const item = await PricelistItem.findByPk(id);
        if (!item) {
            return reply.code(404).send({ error: 'Not Found' });
        }
        const updatedItem = await item.update(request.body);
        return updatedItem;
    });
}