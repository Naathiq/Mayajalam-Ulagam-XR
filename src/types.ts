export type SceneId = 'splash' | 'dashboard' | 'pipeline' | 'student' | 'vr' | 'analytics';

export interface SceneProps {
  onNext: () => void;
  onPrev?: () => void;
  [key: string]: any;
}
