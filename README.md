# Apollo Server Typescript demo

Setup

```bash
pnpm i apollo-server graphql
pnpm i -D typescript @types/node
```

tsconfig.json

```json
{
    "compilerOptions": {
        "lib": [
            "es2021"
        ],
        "module": "commonjs",
        "rootDir": "./src",
        "outDir": "./dist",
        "target": "es2021",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true,
        "moduleResolution": "node"
    }
}
```