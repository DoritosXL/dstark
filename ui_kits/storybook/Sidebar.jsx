// Stark UI Kit — Sidebar.jsx
// The Storybook-style left-rail navigation.

function Sidebar({ tree, current, onSelect }) {
  return (
    <nav className="sb-sidebar">
      <div className="sb-sidebar__brand">
        <img src="../../assets/logo-wordmark.svg" alt="Stark" height="28"/>
        <span className="sb-sidebar__version">v0.1</span>
      </div>

      <div className="sb-sidebar__search">
        <input className="stk-input" placeholder="Find a story…" style={{ fontSize: 'var(--size-14)', padding: '8px 12px' }}/>
      </div>

      <div className="sb-sidebar__tree">
        {tree.map(section => (
          <div key={section.title} className="sb-sec">
            <div className="sb-sec__title">{section.title}</div>
            <ul className="sb-sec__list">
              {section.items.map(item => {
                const active = item.id === current;
                return (
                  <li key={item.id}>
                    <button
                      className={['sb-item', active && 'sb-item--active'].filter(Boolean).join(' ')}
                      onClick={() => onSelect(item.id)}
                    >
                      <span className="sb-item__dot" aria-hidden="true"></span>
                      <span>{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}

Object.assign(window, { Sidebar });
