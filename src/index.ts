/**
 * dstark — the Stark Design System
 *
 * Mount <ChalkDefs /> once near the root of your app, then use any component:
 *
 * ```tsx
 * import 'dstark/styles';
 * import { ChalkDefs, Button, Card } from 'dstark';
 *
 * export default function App() {
 *   return (
 *     <>
 *       <ChalkDefs />
 *       <Button>Press me</Button>
 *     </>
 *   );
 * }
 * ```
 */

import './styles.css';

export { ChalkDefs } from './ChalkDefs';

export { Button } from './components/Button';
export type { ButtonProps, ButtonVariant, ButtonSize } from './components/Button';

export { Card } from './components/Card';
export type { CardProps } from './components/Card';

export { Input } from './components/Input';
export type { InputProps } from './components/Input';

export { Badge } from './components/Badge';
export type { BadgeProps, BadgeVariant } from './components/Badge';

export { Tabs } from './components/Tabs';
export type { TabsProps, TabOption } from './components/Tabs';

export { Logo } from './components/Logo';
export type { LogoProps } from './components/Logo';
