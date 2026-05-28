type TagListProps = {
  tags: readonly string[];
};

export function TagList({ tags }: TagListProps) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          className="rounded bg-slate-700/60 px-2.5 py-1 text-[11px] font-semibold text-text-muted"
          key={tag}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
