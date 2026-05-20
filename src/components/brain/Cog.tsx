import { motion, MotionValue } from 'framer-motion';
import { memo } from 'react';

interface CogProps {
  id: string;
  transform: string;
  pathD: string;
  pathId: string;
  rotation: MotionValue<number>;
  fill?: string;
  stroke?: string;
  strokeWidth?: number | string;
  extraElements?: React.ReactNode;
}

export const Cog = memo<CogProps>(
  ({
    id,
    transform,
    pathD,
    pathId,
    rotation,
    fill = '#FFF',
    stroke = '#000',
    strokeWidth = 2,
    extraElements,
  }) => (
    <g id={id} transform={transform} fill={fill} stroke={stroke} strokeWidth={strokeWidth}>
      <motion.path
        d={pathD}
        id={pathId}
        style={{ rotate: rotation, willChange: 'transform' }}
      />
      {extraElements}
    </g>
  ),
);

Cog.displayName = 'Cog';
