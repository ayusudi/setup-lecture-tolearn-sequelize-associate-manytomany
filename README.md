### Database Table

#### Users 
- id SERIAL PK
- name STRING
- email STRING
- password STRING 
> All column allow null false. Email must be unique & please encrypted password.

#### Movies 
- id SERIAL PK
- title STRING
- poster STRING
- synopsis TEXT
> All column allow null false. Title unique.

#### Likes 
- id SERIAL PK
- userId INT FK
- movieId  INT FK
> All column allow null false.

#### Actors 
- id SERIAL PK
- name STRING
- realName STRING
- profile STRING
- gender CHAR(1) (M/F)
- birthDate DATE
> All column allow null false. 

#### Casts
- id SERIAL PK
- MovieId INT FK
- ActorId INT FK
- characterName STRING
- mainCharacter BOOLEAN 
- characterType STRING (protagonist/antagonist/deuteragonist)
- image STRING
> All column allow null false.


sequelize model:create --name User --attributes name:string,email:string,password:string
sequelize model:create --name Movie --attributes title:string,poster:string,synopsis:text
sequelize model:create --name Like --attributes userId:integer,movieId:integer
sequelize model:create --name Actor --attributes name:string,realName:string,profile:string,gender:char,birthDate:date
sequelize model:create --name Cast --attributes MovieId:integer,ActorId:integer,characterName:string,mainCharacter:boolean,characterType:string,image:string