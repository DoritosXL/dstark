// Stark UI Kit — Tabs.jsx

function Tabs({ options, value, onChange }) {
  return (
    <div className="stk-tabs" role="tablist">
      {options.map(opt => {
        const key = typeof opt === 'string' ? opt : opt.value;
        const label = typeof opt === 'string' ? opt : opt.label;
        const selected = key === value;
        return (
          <button
            key={key}
            role="tab"
            aria-selected={selected}
            className="stk-tabs__btn"
            onClick={() => onChange?.(key)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

Object.assign(window, { Tabs });
