// Required when adding declarations inside a module (.ts, not .d.ts)
// If you have documentation about why this is required I would love to know
declare global
{
    // Target the module containing the `ProcessEnv` interface
    namespace NodeJS
    {
        // Merge the existing `ProcessEnv` definition with ours
        export interface ProcessEnv
        {
            NODE_ENV: "development" | "production" | "test";
            MY_API_KEY: string
            DB_USER?: string
        }
    }
}