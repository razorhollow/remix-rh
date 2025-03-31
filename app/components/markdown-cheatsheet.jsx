import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "~/components/ui/tooltip"

export function MarkdownCheatsheet() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            className="fixed right-6 top-6 rounded-md bg-goldenrod p-3 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-goldenrod focus:ring-offset-2 z-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
            </svg>
          </button>
        </TooltipTrigger>
        <TooltipContent side="left" className="max-w-[300px] p-4 bg-white shadow-lg border border-gray-200">
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900">Markdown Cheat Sheet</h3>
            <div className="grid grid-cols-2 gap-2 text-xs text-gray-800">
              <div>
                <p className="font-medium mb-1">Headers</p>
                <p># H1</p>
                <p>## H2</p>
                <p>### H3</p>
              </div>
              <div>
                <p className="font-medium mb-1">Text Style</p>
                <p>*italic* or _italic_</p>
                <p>**bold** or __bold__</p>
                <p>~~strikethrough~~</p>
              </div>
              <div>
                <p className="font-medium mb-1">Lists</p>
                <p>- Bullet point</p>
                <p>1. Numbered</p>
                <p>2. List</p>
              </div>
              <div>
                <p className="font-medium mb-1">Links & Images</p>
                <p>[text](url)</p>
                <p>![alt](image-url)</p>
              </div>
              <div>
                <p className="font-medium mb-1">Code</p>
                <p>`inline code`</p>
                <p>```code block```</p>
              </div>
              <div>
                <p className="font-medium mb-1">Quotes</p>
                <p>{'>'} Blockquote</p>
                <p>{'>'} {'>'} Nested quote</p>
              </div>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
} 