This project is intended to demonstrate the difficulties I'm having in creating a custom React hook that returns functions that maintain reference equality with every invocation of the hook.

> Turns out, the problem wasn't with my use of `useCallback`, but instead with my use of enzyme's `shallow()` function for testing.
> See this [StackOverflow question](https://stackoverflow.com/q/59977519/2517147) I asked.

It also serves as a decent example of how to nicely set up jest + enzyme testing for react. Check out the git history for a detailed step-by-step process.

---

You can run this project with:

```bash
yarn
yarn jest
```
