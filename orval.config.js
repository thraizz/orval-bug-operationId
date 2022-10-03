module.exports = {
    config: {
        input: "./openApiCatalog.json",
        output: {
            target: "./src/services/api.ts",
            client: "react-query",
        },
    },
};
