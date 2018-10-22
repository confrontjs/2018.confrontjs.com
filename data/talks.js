module.exports = [
    {
        title: "Scalable Best Practices for Your Development Team",
        lang: "en",
        abstract: `
        <p>
            Software development teams usually are fairly complex: shifting
            priorities, changing requirements, and different personalities.
            This talk focuses on the ever-changing front-end tech landscape,
            along with team management in order to encourage best software
            engineering practices and better team culture across front-end
            teams through real-world use cases and historical lessons learned.
        </p>
        `,
        category: "Front-end",
        tags: [
            "React",
            "Babel",
            "TypeScript"
        ],
        speakers: [
            require('./people/tejas-kumar'),
        ]
    },
    {
        title: "Accessibility for All <3",
        lang: "en",
        abstract: `
        <p>
            Do you know, around the world 1 out of 5 people is not able
            to access the apps and site we developer are making because
            they are suffering from either - vision, speech, hear, physical
            or cognitive problem. We forget while building the fancy apps
            that we need to make the web accessible for 'All' reason
            is that web was/is by default accessible to everyone but we
            developers are doing something wrong. In this talk we are going
            to see why accessibility is important, type of accessibility
            we need to take care, what we as developers need to do to make
            our web apps accessible for all.
        </p>
        `,
        category: "Front-end",
        tags: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Angular.js"
        ],
        speakers: [
            require('./people/neha-sharma'),
        ]
    },
    {
        title: "Algebraic Data Types",
        lang: "en",
        abstract: `
        <p>
            Most languages have the concept of types defined. It's always good
            to feel safe working with the codebase.
        </p>
        <p>
            One of approaches to successfully launch new project is to define
            a domain model in the way your grandma used to make it. In this
            talk I will present you a hipster way to fulfill this task using
            the Algebraic Data Types.
        </p>
        `,
        category: "Programming patterns",
        tags: [
            "Functional Programming",
            "TypeScript",
            "Category Theory"
        ],
        speakers: [
            require('./people/marcin-wadon'),
        ]
    },
    {
        title: "Build your own test runner",
        lang: "en",
        abstract: `
        <p>
            In the javascript renaissance, more and more developers become
            toolmakers; even a basic understanding of how a tool works can
            help in the debugging process.
        </p>
        <p>
            Together, we'll live code a mocha-like test runner from scratch.
        </p>
        <p>
            While understanding the mechanism behind it, we'll create a small
            CLI app, that runs our test suites, and reports the results to the
            console.
        </p>
        `,
        category: "Live coding",
        tags: [
            "JavaScript",
            "Node.js",
            "Test Runner"
        ],
        speakers: [
            require('./people/ran-yitzhaki'),
        ]
    },
    {
        title: "Taste the Future with Functional Web Components",
        lang: "en",
        abstract: `
        <p>
            The presentation will be about my recently released
            library - Hybrids. As the project has got some tension in the
            community, I would like to show:
        </p>

        <ul>
            <li>
                Briefly my history of creating open source projects
                and how they influenced on the hybrids library
            </li>
            <li>
                Presentation of the core concepts behind hybrids,
                and how they make it super awesome! This includes
                library definition syntax, factory functions pattern,
                property translation, and cache mechanism.
            </li>
        </ul>
        `,
        category: "Libraries/Frameworks",
        tags: [
            "JavaScript",
            "Web Components"
        ],
        speakers: [
            require('./people/dominik-lubanski'),
        ]
    },
    {
        title: "Moving from Anarchy to Sustainability",
        lang: "en",
        abstract: `
        <p>
            This talk covers the architecture and challenges of moving
            user-facing applications from startup mode to enterprise mode.
            The problem of 100 different applications that use every JS
            framework, 600+ API endpoints, multiple JavaScript dialects,
            with an unproductive UX or UI components. We will cover
            architecture to facilitate the migration of disparate
            applications to a large scale Single Page web application
            and the environment that supports it.
        </p>
        `,
        category: "Software architecture",
        tags: [
            "React",
            "JavaScript GraphQL",
            "REST"
        ],
        speakers: [
            require('./people/peter-milne'),
        ]
    },
    {
        title: "Making internets great again - a story of working with legacy code",
        lang: "en",
        abstract: `
        <p>
            Most of the developers one day will have to work with some kind
            of legacy application. I want to present a story about one
            of the applications I've been working on, which was started
            ~4 years ago as a hybrid of .NET MVC and AngularJS (1.3) and
            a journey our team came through last year to make it possible
            to support and more reliable than before. It's not a fairy
            tale - we still need to rewrite but it is still doing a good
            job in meeting business needs and making money.
        </p>
        `,
        category: "Code quality, legacy code, refactoring",
        tags: [
            "Angular.js",
            "SonarQube",
            "ESLint",
            "Gulp",
            "TeamCity",
            "Octopus Deploy",
            "NPM Audit",
            "GitHub security alerts"
        ],
        speakers: [
            require('./people/miszo-radomski'),
        ]
    },
    {
        title: "When Push Comes to Web",
        lang: "en",
        abstract: `
        <p>
            Like fire from mount Olympus, Push Notifications were stolen
            from the native mobile applications, for the benefit of us
            JavaScript developers. Now available for anyone, they are
            a powerful tool for building user engagement.
        </p>

        <p>
            In this talk I'll explain how they can improve your business
            and how you can start using them. By the end you should have
            a solid grasp of how Push Notifications work and be aware of
            the common pitfalls to avoid.
        </p>
        `,
        category: "Introduction of the technology",
        tags: [
            "Push Notifications",
            "PWA",
            "Mobile"
        ],
        speakers: [
            require('./people/nadia-ginalska'),
        ]
    },
    {
        title: "The Front-end TDD challenge",
        lang: "en",
        abstract: `
        <p>
            TDD, the final frontier. These are the voyagers of the average
            developer, to create stable features, to join in the CI/CD world,
            to boldly develop minimum amount of code!
        </p>

        <p>
            Many people say it is impossible to develop a front end
            application without opening the browser. I’m here to put
            these claims to the (unit) test!
        </p>

        <p>
            In this talk we will build a working app - without opening
            the browser during the development process.
        </p>

        <p>
            By the end of this talk, you will see the true meaning of TDD
            and how you can work with it to become a better developer.
        </p>

        <p>
            Ready to become a TDD master? This talk is for you!
        </p>
        `,
        category: "Development",
        tags: [
            "JavaScript",
            "Automated tests",
            "TDD"
        ],
        speakers: [
            require('./people/yonatan-kra'),
        ]
    },
    {
        title: "RxJS: Tailor-made, or is it?",
        lang: "en",
        abstract: `
        <p>
            Rx is implementation of two paradigms: Reactive Programming
            and Functional Programming. It is not new but got popular after
            Angular implementation was based on it.
            JavaScript version is creation of Ben Lesh - Main Architect at
            Netflix now working with Angular Team.
        </p>

        <p>
            Thinking reactively opens new world of possibilities. Makes us
            understand that we were a bit lied off by technology
            and bringing streams back home. I will show you concepts
            and ideas behind it and explain why it may make ours everyday
            code easier.
        </p>

        <p>
            Will it have own place at JavaScript scene and in yours lines
            of code?
        </p>
        `,
        category: "Thinking, RxJS, Reactive Functional Programing, Data Streams",
        tags: [
            "RxJS",
            "Reactive Programming",
            "Functional Programming"
        ],
        speakers: [
            require('./people/lukasz-stankiewicz'),
        ]
    },
    {
        title: "Migrating from Monolith to Microfrontends",
        lang: "en",
        abstract: `
        <p>
            Recently, bol.com seller dashboards, which used to be a monolith,
            decomposed into microfrontends defined by a business domain
            concept. We experimented on different ways of microfrontend
            techniques and picked one. Since each application can run
            independently on their own minimal setup, this gave the teams
            great flexibility, autonomy and yet improved the ownership
            of the individuals. Despite some drawbacks, such as UX
            consistency, performance issues, etc. this technique definitely
            proved itself within bol.com. In this case study, you will hear
            our gains from using microfrontends.
        </p>
        `,
        category: "Case study",
        tags: [
            "Microfronend"
        ],
        speakers: [
            require('./people/yaprak-ayazoglu'),
        ]
    },
    {
        title: "You've been doing CSS wrong",
        lang: "en",
        abstract: `
        <p>
            In my career I wrote a lot of bad code. When I got back to it I
            could tell what was wrong, and use this knowledge, to not make the
            same mistakes in the future.
        </p>
        <p>
            Not with CSS though. I've used different frameworks, methodologies,
            preprocessors and I never got the feeling why it worked or not.
        </p>
        <p>
            I decided to study this topic. In my presentation I will approach
            styling from a Software Engineering POV. I'll explain the theory of
            writing testable code and how it affects CSS programming. What parts
            of CSS we forgot about, but should be using. How we can up our game
            even more with CSS-in-JS and why you should finally drop BEM.
        </p>
        `,
        category: "Software Engineering",
        tags: [
            "JavaScript",
            "CSS",
            "styled-components",
            "BEM"
        ],
        speakers: [
            require('./people/michal-warda'),
        ]
    }
];
