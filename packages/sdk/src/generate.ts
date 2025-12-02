import type { Project, EmbedOptions, OpenOptions } from './interfaces';
import { PROJECT_TEMPLATES } from './constants';
import { embedUrl, openTarget, openUrl } from './helpers';

function createHiddenInput(name: string, value: string) {
  const input = document.createElement('input');
  input.type = 'hidden';
  input.name = name;
  input.value = value;
  return input;
}

/**
 * Encode file paths for use in input name attributes.
 * We need to replace square brackets (as used by Next.js, SvelteKit, etc.),
 * with custom escape sequences. Important: do not encodeURIComponent the
 * whole path, for compatibility with the khulnaSoft backend.
 */
function encodeFilePath(path: string) {
  return path.replace(/\[/g, '%5B').replace(/\]/g, '%5D');
}

export function createProjectForm({
  template,
  title,
  description,
  dependencies,
  files,
  settings,
}: Project) {
  if (!PROJECT_TEMPLATES.includes(template)) {
    const names = PROJECT_TEMPLATES.map((t) => `'${t}'`).join(', ');
    console.warn(`Unsupported project.template: must be one of ${names}`);
  }
  if (dependencies && template === 'node') {
    console.warn(
      `Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template.`
    );
  }

  const projectFields = [
    { name: 'project[title]', value: title },
    {
      name: 'project[description]',
      value: description,
      condition: typeof description === 'string' && description.length > 0,
    },
    { name: 'project[template]', value: template ?? 'javascript' },
    {
      name: 'project[dependencies]',
      value: dependencies ? JSON.stringify(dependencies) : undefined,
      condition: dependencies && template !== 'node',
    },
    {
      name: 'project[settings]',
      value: settings ? JSON.stringify(settings) : undefined,
      condition: !!settings,
    },
  ];

  const inputs = projectFields
    .filter((field) => field.condition ?? true)
    .map((field) => createHiddenInput(field.name, field.value!));

  Object.entries(files).forEach(([path, contents]) => {
    inputs.push(createHiddenInput(`project[files][${encodeFilePath(path)}]`, contents));
  });

  const form = document.createElement('form');
  form.method = 'POST';
  form.setAttribute('style', 'display:none!important;');
  form.append(...inputs);
  return form;
}

export function createProjectFrameHTML(project: Project, options?: EmbedOptions) {
  const form = createProjectForm(project);
  form.action = embedUrl('/run', options);
  form.id = 'sb_run';

  const html = `<!doctype html>
<html>
<head><title></title></head>
<body>
  ${form.outerHTML}
  <script>document.getElementById('${form.id}').submit();</script>
</body>
</html>`;

  return html;
}

export function openNewProject(project: Project, options?: OpenOptions) {
  const form = createProjectForm(project);
  form.action = openUrl('/run', options);
  form.target = openTarget(options);

  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
}
