import type { TimelineItem } from '../types';

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="timeline">
      {items.map((item) => (
        <article className="timeline-item" key={`${item.title}-${item.organization}`}>
          <div>
            <span>{item.duration}</span>
            <h3>{item.title}</h3>
            <p>{item.organization}</p>
          </div>
          {item.details && (
            <ul>
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </div>
  );
}
