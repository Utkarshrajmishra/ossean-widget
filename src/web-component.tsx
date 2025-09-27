import ReactDOM from "react-dom/client";
import FeedbackWidget from "./components/ui/widget";

export const normalizeAttribute = (attribute: string): string => {
  return attribute.replace(/-([a-z])/g, (_, letter: string) =>
    letter.toUpperCase()
  );
};

class WidgetWebComponent extends HTMLElement {
  private root: ReactDOM.Root | null = null;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const props = this.getPropsFromAttributes();
    if (!this.shadowRoot) return;

    this.root = ReactDOM.createRoot(this.shadowRoot);
    this.root.render(<FeedbackWidget {...props} />);
  }

  disconnectedCallback() {
    // Clean up when element is removed
    this.root?.unmount();
  }

  private getPropsFromAttributes(): Record<string, string> {
    const props: Record<string, string> = {};
    for (const attr of Array.from(this.attributes)) {
      props[normalizeAttribute(attr.name)] = attr.value;
    }
    return props;
  }
}

export default WidgetWebComponent