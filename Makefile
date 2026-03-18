.PHONY: install brain-games lint publish

install:
	npm ci

brain-games:
	node bin/brain-games.js

lint:
	node_modules/.bin/eslint .

publish:
	npm publish --dry-run
