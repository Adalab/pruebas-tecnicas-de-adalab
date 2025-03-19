# Techtronic homepage

## Installing Tailwind into Vite project

First, if we are using a React template with Sass installed, uninstall it.

We are following the instructions from Tailwind page <https://tailwindcss.com/docs/installation/using-vite>

```bash
npm install tailwindcss @tailwindcss/vite
```

Add into `vite.onfig.ts`

```js
. . .
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  . . .
  plugins: [
    . . .
    tailwindcss(),
  ],
  . . . 
})
```

Add to main.css or App.css an import of Tailwind styles:

```css
@import "tailwindcss";
```