/* eslint-disable @next/next/no-img-element */
const COMMENTS = [
  {
    id: '1',
    user: {
      name: 'user.eth',
      avatar: '',
    },
    date: '15d ago',
    content:
      'Lorem ipsum dolor sit amet consectetur. Diam id augue ut hendrerit pellentesque ultricies feugiat gravida. Ornare ante semper vitae fames sit mus. Diam id urna aliquam vulputate tellus. Dolor fames gravida morbi mauris.',
  },
  {
    id: '2',
    user: {
      name: 'user.eth',
      avatar: '',
    },
    date: '15d ago',
    content:
      'Lorem ipsum dolor sit amet consectetur. Diam id augue ut hendrerit pellentesque ultricies feugiat gravida. Ornare ante semper vitae fames sit mus. Diam id urna aliquam vulputate tellus. Dolor fames gravida morbi mauris.',
  },
  {
    id: '3',
    user: {
      name: 'user.eth',
      avatar: '',
    },
    date: '15d ago',
    content:
      'Lorem ipsum dolor sit amet consectetur. Diam id augue ut hendrerit pellentesque ultricies feugiat gravida. Ornare ante semper vitae fames sit mus. Diam id urna aliquam vulputate tellus. Dolor fames gravida morbi mauris.',
  },
]

export const Comments = () => {
  const comments = COMMENTS
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-xl font-bold">
        Comments{' '}
        <span className="text-lg text-black/30">{comments.length}</span>
      </h3>
      <ul className="flex flex-col gap-6">
        {COMMENTS.map((comment) => (
          <li key={comment.id} className="flex gap-4">
            <img
              src={comment.user.avatar || '/images/sbee-avatar.png'}
              alt="sbee logo"
              width={40}
              height={40}
              className="h-10 w-10 overflow-hidden rounded-full"
            />
            <div className="flex w-full flex-col gap-1">
              <div className="flex gap-2">
                <p className="text-base text-black">{comment.user.name}</p>
                <p className="text-base text-black/40">{comment.date}</p>
              </div>
              <p className="text-sm text-black/60">{comment.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
