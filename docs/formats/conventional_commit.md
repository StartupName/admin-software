# Commit Convention — ADMIN_SOFTWARE

## Format

```text
type(scope): short description

- Detailed description of the change.
```

The description is optional


## Project Scopes

- `component`: changes limited to a UI component or feature.
- `multiple`: changes that affect multiple components or features.
- `server{Component}`: API requests, authentication, and response handling within the internal logic of the components, the braces are removed and the component in question is added.
- `config`: project or tool configuration.
- `deps`: dependencies and package management.
- `docs`: project documentation.
- `modules`: changes that affect the internal modules of the project.
- `all`: changes that affect the entire project.


## Types

### Feature

```text
feat(scope): new functionality

- Description of the new functionality.
```

### Fix

```text
fix(scope): fix an error

- Description of the corrected behavior.
```

### Refactor

```text
refactor(scope): improve internal code without changing behavior

- Description of the internal improvement.
```

### Documentation

```text
docs(docs): update project documentation

- Description of the documentation change.
```

### Styles

Use this type only for visual or formatting changes that do not modify behavior.

```text
style(scope): update visual styles or code formatting

- Description of the style change.
```