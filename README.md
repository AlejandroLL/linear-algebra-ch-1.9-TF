# linear-algebra TF study guide

A lightweight true/false study app for linear algebra with LaTeX rendering.

## Project structure

- `index.html`: HTML layout and script/style includes.
- `styles.css`: app-specific CSS (animations and custom styling).
- `quiz-data.js`: quiz content only (sections and questions).
- `app.js`: UI behavior, rendering, and quiz logic.
- `mathjax-config.js`: MathJax configuration loaded before MathJax.

## Add a new section

1. Open `quiz-data.js`.
2. Add a new object to `window.QUIZ_SECTIONS`:
   - `id`: short key like `'4.3'`
   - `title`: display name like `'Section 4.3: ...'`
   - `questions`: array of `{ q, a, j }`
3. Optional fields:
   - `badge`: small label shown under the title.
   - `highlight`: currently supports `'emerald'`.

Example section object:

```js
{
	id: '4.3',
	title: 'Section 4.3: Basis and Dimension',
	badge: 'New this week',
	questions: [
		{ q: 'A basis must span the space.', a: true, j: 'Spanning is one of the two basis requirements.' },
		{ q: 'A dependent set can be a basis.', a: false, j: 'A basis must be linearly independent.' }
	]
}
```

The main menu is generated automatically from `quiz-data.js`, so no HTML edits are needed for new sections.
