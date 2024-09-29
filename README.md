

create the .env file and
//Database
DATABASE=DBName
DB_HOST=host
DB_PORT=port
DB_USERNAME=username
DB_PASSWORD=password

//Server
PORT=3001
SECRETKEY=hellosecret 

s3 credentials
ACCESS_KEY_ID = ACCESS_KEY_ID
SECRET_ACCESS_KEY=SECRET_ACCESS_KEY
REGION= REGION
BUCKET= BUCKET

step 2 is
install the packges
# npm i 

step 2 is
create the migration by this command
# db-migrate up
 step 4 is 

 run the project by command
# npm run dev


project is 

NodeTsSquelize
├─ .db-migraterc
├─ .eslintignore
├─ .eslintrc.json
├─ .gitignore
├─ .sequelizerc
├─ README.md
├─ build.ts
├─ db
│  ├─ configs.json
│  └─ migrations
│     └─ sqls
├─ package.json
├─ src
│  ├─ configs
│  │  └─ db.ts
│  ├─ constants
│  │  ├─ EnvVars.ts
│  │  ├─ misc.ts
│  │  ├─ responses.ts
│  │  └─ schemaValidations.ts
│  ├─ controllers
│  ├─ index.ts
│  ├─ middlewares
│  │  ├─ authenticator.ts
│  │  ├─ errrorHandler.ts
│  │  └─ validator.ts
│  ├─ models
│  │  ├─ ModelAssociations.ts
│  │  └─ Product.ts
│  ├─ routes
│  │  ├─ index.ts
│  │  └─ product.route.ts
│  ├─ services
│  │  └─ ProductService.ts
│  └─ util
│     └─ jwt.ts
├─ tsconfig.json
└─ tsconfig.prod.json

```