'use client';

import AvatarIcon from '../avatar-icon';
import AvatarSimpleName from './avatar-simple-name';
import React from 'react';
import { Tooltip } from '@nextui-org/tooltip';
import SimpleProfile from '../../simple-profile';

interface Props {
  size: Size;
  date: string;
  hasLink?: boolean;
  hasTooltip?: boolean;
}

export default function AvatarSimple({
  size,
  date,
  hasLink = false,
  hasTooltip = false,
}: Props) {
  const flexGap = size === 'extraSmall' ? 'gap-1.5' : 'gap-3';

  return (
    <section className={`flex ${flexGap} items-end`}>
      {hasTooltip ? (
        <Tooltip
          showArrow={true}
          content={
            <section className="px-1 py-2">
              <SimpleProfile />
            </section>
          }
          classNames={{
            base: 'bg-green-light',
            arrow: 'bg-green-light',
          }}
        >
          <span>
            <AvatarIcon hasLink={hasLink} size={size} />
          </span>
        </Tooltip>
      ) : (
        <AvatarIcon hasLink={hasLink} size={size} />
      )}
      <section>
        <AvatarSimpleName hasLink={hasLink} size={size} />
        <p className="text-xs text-slate-400">{date}</p>
      </section>
    </section>
  );
}
