install:
	npm install

brain-games:
	node bin/brain-games.js

version:
	node -v
	npm -v

link:
	npm link

lint:
	npx eslint .

publish:
	npm publish --dry-run
