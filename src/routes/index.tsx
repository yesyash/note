import { createFileRoute } from '@tanstack/react-router'
import { MarkdownEditor } from '@/components/markdown-editor'

const FEATURES_LIST = [
  'Headings h1–h6(#.. ######)',
  'Checkboxes(task list items - [] and - [x])',
  'Links',
  'Paragraphs',
  'Bold(text or text)',
  'Italic(text or text)',
  'Block quote(> )',
  'Lists: ordered(1.) and unordered(• but you want rendered as dash -)',
  'Unordered to visually show dash instead of bullet',
  'Auto conversion: typing markdown patterns in the editor should transform immediately(like Obsidian)',
]

const COMPLETED_FEATURES_LIST = [FEATURES_LIST[0]]

const CheckList = () => {
  return (
    <ul className="">
      {FEATURES_LIST.map((feature, index) => (
        <li key={index} className="mb-2 flex items-center gap-2">
          <input
            type="checkbox"
            id={feature.toLowerCase().replaceAll(' ', '_')}
            checked={COMPLETED_FEATURES_LIST.includes(feature)}
          />
          <label htmlFor={feature.toLowerCase().replaceAll(' ', '_')}>{feature}</label>
        </li>
      ))}
    </ul>
  )
}

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="px-6 py-8 h-svh max-w-7xl mx-auto">
      <h1 className="font-semibold text-2xl">Note</h1>
      <MarkdownEditor />
      <CheckList />
    </div>
  )
}
