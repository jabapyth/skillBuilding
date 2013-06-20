
The thing about testing is that it's much more effective to learn
testing while working on an actual project. There are a number of
types of testing which are important to master in the frontier
environment.

**Note** not sure about the division between apprentice and journeyman.

# Apprentice

## Skills to Demonstrate

- travisci hookup to github [ex](https://travis-ci.org/notablemind/loco)
- [mocha](http://visionmedia.github.io/mocha/)
  - nested `describe`s and `it`s [ex](https://github.com/notablemind/loco/blob/master/test/tests.js#L14)
  - `before` and `beforeEach` to separate setup from test, with scoped variables to share setup data [ex](https://github.com/notablemind/loco/blob/master/test/tests.js#L9)
  - `after` and `afterEach` for any necessary teardown [ex](https://github.com/notablemind/note/blob/master/test/tests-e2e.js#L55)
- [chai's expect](http://chaijs.com/api/bdd/)
  - some of:

      - `eql` [ex](https://github.com/notablemind/settings/blob/master/test/tests.js#L32)
      - `be.(true|false|null|undefined)` [ex](https://github.com/notablemind/settings/blob/master/test/tests.js#L47)
      - `throw` [ex](https://github.com/notablemind/settings/blob/master/test/tests.js#L13)
      - `equal`
      - `match`

  - and, where appropriate:

      - `not`
      - `deep`
      - etc.

# Journeyman

## Skills to demonstrate

- [Karma](http://karma-runner.github.io/0.8/index.html) for tests that require a DOM [ex](https://github.com/notablemind/contenteditable/blob/master/test/karma.conf.js)
- testing an angular directive [ex](https://github.com/notablemind/contenteditable/blob/master/test/tests-e2e.js)
- sinon's spies [ex](https://github.com/fs-components/test-and-target/blob/initial/test/index.js#L36) and [ex](https://github.com/fs-components/test-and-target/blob/initial/test/index.js#L52)

To view these tests:

    git clone git@github.com:notablemind/contenteditable.git
    cd contenteditable && make test

This will open the test page in your browser.

More examples of my repos' tests:

- [notablemind/keys](https://travis-ci.org/notablemind/keys) travis build
- [notablemind/note](http://notablemind.github.io/note/test/index.html) hosted in github pages
- [notablemind/settings](https://travis-ci.org/notablemind/settings/jobs/8105335) travis build

# Master
