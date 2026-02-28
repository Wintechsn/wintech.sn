export type ApprovedComment = {
  id: number;
  author_name: string;
  date: string;
  content: string;
};

type CommentListProps = {
  comments: ApprovedComment[];
};

export default function CommentList({ comments }: CommentListProps) {
  if (!comments.length) return null;

  return (
    <div className="mt-12 pt-10 border-t border-dark_black/10 dark:border-white/10">
      <h3 className="text-xl font-semibold text-dark_black dark:text-white mb-6">
        Commentaires ({comments.length})
      </h3>
      <ul className="flex flex-col gap-6">
        {comments.map((comment) => (
          <li
            key={comment.id}
            className="rounded-2xl border border-dark_black/10 dark:border-white/10 bg-white dark:bg-dark_black p-6"
          >
            <div className="flex flex-wrap items-baseline gap-2 mb-3">
              <span className="font-semibold text-dark_black dark:text-white">
                {comment.author_name}
              </span>
              <span className="text-sm text-dark_black/50 dark:text-white/50">
                {comment.date}
              </span>
            </div>
            <div
              className="text-dark_black/80 dark:text-white/80 prose prose-sm prose-neutral dark:prose-invert max-w-none [&_p]:my-1 [&_p:last-child]:mb-0"
              dangerouslySetInnerHTML={{ __html: comment.content }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
