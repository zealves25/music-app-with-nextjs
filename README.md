# Music app with next.js

This is a mini copy of spotify music app that I created while learning next.js

## Main aspects learned

Doing this app I learn the basics of next.js and manage to see how nice it is to have this backend/frontend all together in one place. I also liked the fact of everything is javascript (typescript in this case). I kinda like to work everything with javascript so **Node.js** for the backend and **React** for the frontend.

It was also amazing to use some really good packages that I didnt' knew about and now I will probably use then in my future projects:

### Prisma

Prisma is a typescript orm and to be honest it's amazing to use as we can have our model with custom types and we got auto completion and linting when using this types in the rest of the code.

Another amazing thing about prisma is the automatic migration tool that easily allow us to run migrations much more faster.

I also used a seed script to load data for development purposes so I only have good things to say regarding Prisma package.

### Easy-peasy

Easy peasy is an app state manager like redux. The big difference comparing with redux is that easy peasy it's an abstraction of redux. It's smaller and let us having the best of state managment without having to do a lot of architecture code and boilerplate code. I used this to do the playing state part of the app but I enjoyed a lot to just create state and some actions and without a lot of code just having this global state managment. So I higly recommend it.

### Chackra UI

AS the purpose of this project was learn Next.js and not UI/UX, I use this Chackra UI package that allow us to use this prebuilded components that represent the majory of the html inputs. We have Boxes (div), Flex(div with flex) and all other components that allow us to build anything much more faster without having to take time to build this from the ground.

It was not the first time that I used something like this, already used MUI from material ui, but this one was the best one for sure. It was really easy to build ui with it.

I recommend and will use this chackra ui package for future projects when the ui is not the number one priority for the client as we can get the same result much more faster and we can focus on other developments.

### Others

We also use others packages that I already used on the past or I just didn't got so surprised to use them. Don't take me wrong, they are all amazing, it's just that I'm probably not that surprised using them as they are something normally used in development:

    - bcrypt
    - cookie
    - jsonwebtoken
    - swr

## Run the app

In order to run the app please download the source and run `yarn` so all the dependencies are installed.

Then you need to create a database. Here I used a remote postgres database from heroku as it was way more simplier to configure this cloud database instead of installing postgres and configure all of that locally. But you can do both ways and it should work.

I created 2 different postgres databases in heroku, one to be used and another to serve as shadow database (prisma ask for this), and then you just need to specify in `.env` both database urls.

    ```
        DATABASE_URL=""
        SHADOW_DATABASE_URL=""
    ```

Then you just need to run `yarn dev` and everything should work
