Here is the adjusted documentation formatted as a Markdown file (`COMMIT_GUIDELINES.md`) suitable for inclusion in your React Native project's folder structure.

```markdown
# Commit Message Guidelines

## Overview

Commit messages are crucial in collaborative software development. They provide context and history, making it easier for team members to understand changes, track issues, and maintain the codebase. This guide outlines best practices for writing clear, concise, and meaningful commit messages.

## Structure of a Commit Message

A commit message should consist of three parts:

1. **Header**: A short summary of the change (max 50 characters).
2. **Body** (optional): Detailed explanation of the change (wrapped at 72 characters).
3. **Footer** (optional): Any references to issues, breaking changes, or other relevant information.

Example:
```

Header: Brief description of the change

Body:

- Explanation of what and why.
- Additional details that help understand the change.
- Bullet points for easy readability if necessary.

Footer:

- References to issues (#1234).
- Breaking changes (if any).

````

## Guidelines for Writing Commit Messages

1. **Use the Imperative Mood in the Header**:
   - Good: `Fix bug in user login module`
   - Bad: `Fixed bug in user login module`

2. **Capitalize the Header**:
   - Good: `Update dependencies`
   - Bad: `update dependencies`

3. **Limit the Header to 50 Characters**:
   - Good: `Add support for dark mode in settings`
   - Bad: `Added support for the new dark mode feature in the settings panel`

4. **Separate Header from Body with a Blank Line**:
   - Correct:
     ```
     Add new validation for user input

     This change adds a new validation step to ensure user input
     is correctly formatted before processing.
     ```

5. **Wrap the Body at 72 Characters**:
   - Correct:
     ```
     Add new validation for user input

     This change adds a new validation step to ensure user input
     is correctly formatted before processing. It helps to prevent
     errors and improve the user experience.
     ```

6. **Use the Body to Explain What and Why, Not How**:
   - Good:
     ```
     Refactor user authentication

     Refactor the user authentication module to improve
     performance and security by using JWT tokens.
     ```
   - Bad:
     ```
     Refactor user authentication

     Changed the way user authentication works by modifying
     the UserAuth class and updating the token generation logic.
     ```

7. **Include References to Issues and PRs in the Footer**:
   - Example:
     ```
     Fix login redirect issue

     Ensure users are redirected to the correct page after login.

     Closes #567
     ```

8. **Indicate Breaking Changes in the Footer**:
   - Example:
     ```
     Remove deprecated API endpoints

     The old API endpoints have been removed as part of the
     cleanup process.

     BREAKING CHANGE: The following endpoints have been removed:
     - /api/v1/old-endpoint
     - /api/v1/another-old-endpoint
     ```

## Types of Commit Messages

Use prefixes to categorize commit messages, making it easier to understand the nature of changes at a glance:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semi colons, etc.)
- `refactor`: Code refactoring without changing functionality
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Changes to the build process or auxiliary tools and libraries

## Examples

1. **Feature Addition**:
````

feat: add password strength indicator

Add a password strength indicator to the user registration form
to enhance user experience and improve security.

```

2. **Bug Fix**:
```

fix: resolve crash on profile update

Fix a crash that occurs when users try to update their profile
with an empty bio field.

```

3. **Documentation**:
```

docs: update API usage examples

Update the API usage examples in the documentation to reflect
recent changes in the API endpoints and parameters.

```

4. **Code Style**:
```

style: format code according to ESLint rules

Reformat the codebase to comply with the project's ESLint
configuration. No functional changes are introduced.

```

5. **Refactoring**:
```

refactor: improve readability of authentication module

Refactor the authentication module to improve code readability
and maintainability. No changes in functionality.

```

6. **Performance Improvement**:
```

perf: optimize image loading

Optimize image loading by implementing lazy loading and reducing
image sizes for faster page load times.

```

7. **Testing**:
```

test: add unit tests for user service

Add unit tests for the user service to ensure correct functionality
and improve test coverage.

```

8. **Chore**:
```

chore: update dependencies

Update project dependencies to their latest versions to ensure
compatibility and security.

```

## Conclusion

By following these guidelines, your team can ensure that commit messages are clear, informative, and useful for everyone involved in the project. Consistent and meaningful commit messages will significantly improve the project's maintainability and collaboration efficiency.

## References

For further reading and additional best practices, refer to the following resources:
- [Conventional Commits Specification](https://www.conventionalcommits.org/)
- [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)
- [GitHub Docs: About Commit Messages](https://docs.github.com/en/github/committing-changes-to-your-project/creating-and-editing-commits/about-commit-messages)
```
