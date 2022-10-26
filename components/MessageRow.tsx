import { FC } from 'react';

type MessageRowProps = {
  type: 'personal' | 'group';
  title: string;
  lastMsg: string;
  lastMsgFrom?: string;
  lastMsgTime: Date;
  read: boolean;
};

const MessageRow: FC<MessageRowProps> = ({
  type,
  title,
  lastMsg,
  lastMsgFrom,
  lastMsgTime,
  read,
}) => {
  const profilePic =
    type === 'personal' ? (
      <div className="flex justify-center relative w-12 h-8">
        <div className="flex justify-center items-center w-8 aspect-square rounded-full bg-primary">
          <svg
            className="w-3 h-3 fill-white"
            viewBox="0 0 21 21"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.3685 0.0292358C7.58987 0.0292358 5.33928 2.27982 5.33928 5.05848C5.33928 7.83713 7.58987 10.0877 10.3685 10.0877C13.1472 10.0877 15.3978 7.83713 15.3978 5.05848C15.3978 2.27982 13.1472 0.0292358 10.3685 0.0292358ZM12.8831 5.0585C12.8831 3.67546 11.7515 2.54388 10.3685 2.54388C8.98544 2.54388 7.85386 3.67546 7.85386 5.0585C7.85386 6.44154 8.98544 7.57312 10.3685 7.57312C11.7515 7.57312 12.8831 6.44154 12.8831 5.0585ZM17.9123 17.6316C17.6608 16.7389 13.7632 15.117 10.3684 15.117C6.98627 15.117 3.11375 16.7263 2.82457 17.6316H17.9123ZM0.309998 17.6316C0.309998 14.2871 7.01146 12.6023 10.3685 12.6023C13.7255 12.6023 20.427 14.2871 20.427 17.6316V20.1462H0.309998V17.6316Z"
            />
          </svg>
        </div>
      </div>
    ) : (
      <div className="flex items-center relative w-12 h-8">
        <div className="flex flex-shrink-0 justify-center items-center w-8 aspect-square rounded-full bg-neutral">
          <svg
            className="w-3 h-3 fill-secondary"
            viewBox="0 0 21 21"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.3685 0.0292358C7.58987 0.0292358 5.33928 2.27982 5.33928 5.05848C5.33928 7.83713 7.58987 10.0877 10.3685 10.0877C13.1472 10.0877 15.3978 7.83713 15.3978 5.05848C15.3978 2.27982 13.1472 0.0292358 10.3685 0.0292358ZM12.8831 5.0585C12.8831 3.67546 11.7515 2.54388 10.3685 2.54388C8.98544 2.54388 7.85386 3.67546 7.85386 5.0585C7.85386 6.44154 8.98544 7.57312 10.3685 7.57312C11.7515 7.57312 12.8831 6.44154 12.8831 5.0585ZM17.9123 17.6316C17.6608 16.7389 13.7632 15.117 10.3684 15.117C6.98627 15.117 3.11375 16.7263 2.82457 17.6316H17.9123ZM0.309998 17.6316C0.309998 14.2871 7.01146 12.6023 10.3685 12.6023C13.7255 12.6023 20.427 14.2871 20.427 17.6316V20.1462H0.309998V17.6316Z"
            />
          </svg>
        </div>
        <div className="flex flex-shrink-0 justify-center items-center absolute left-4 w-8 aspect-square rounded-full bg-primary">
          <svg
            className="w-3 h-3 fill-white"
            viewBox="0 0 21 21"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.3685 0.0292358C7.58987 0.0292358 5.33928 2.27982 5.33928 5.05848C5.33928 7.83713 7.58987 10.0877 10.3685 10.0877C13.1472 10.0877 15.3978 7.83713 15.3978 5.05848C15.3978 2.27982 13.1472 0.0292358 10.3685 0.0292358ZM12.8831 5.0585C12.8831 3.67546 11.7515 2.54388 10.3685 2.54388C8.98544 2.54388 7.85386 3.67546 7.85386 5.0585C7.85386 6.44154 8.98544 7.57312 10.3685 7.57312C11.7515 7.57312 12.8831 6.44154 12.8831 5.0585ZM17.9123 17.6316C17.6608 16.7389 13.7632 15.117 10.3684 15.117C6.98627 15.117 3.11375 16.7263 2.82457 17.6316H17.9123ZM0.309998 17.6316C0.309998 14.2871 7.01146 12.6023 10.3685 12.6023C13.7255 12.6023 20.427 14.2871 20.427 17.6316V20.1462H0.309998V17.6316Z"
            />
          </svg>
        </div>
      </div>
    );

  const readIndicator = read ? null : (
    <div className="w-2 h-2 flex-shrink-0 bg-indicator-red rounded-full"></div>
  );

  const lastMessage =
    type === 'personal' ? (
      <div className="flex items-center justify-between">
        <p className="text-xs leading-none line-clamp-1">{lastMsg}</p>
        {readIndicator}
      </div>
    ) : (
      <div className="flex flex-col gap-1">
        <p className="text-sm font-bold leading-none line-clamp-1">
          {lastMsgFrom}:
        </p>
        <div className="flex items-center justify-between">
          <p className="text-xs leading-none line-clamp-1">{lastMsg}</p>
          {readIndicator}
        </div>
      </div>
    );

  return (
    <div className="flex gap-4 w-full py-[1.375rem] border-b last:border-b-0 border-b-accent">
      <div>{profilePic}</div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex gap-4 w-full">
          <p className="flex-grow-1 line-clamp-2 font-bold leading-tight text-primary">
            {title}
          </p>
          <p className="flex-shrink-0 text-xs leading-5">
            {lastMsgTime.toLocaleString(undefined, {
              year: 'numeric',
              month: read ? 'numeric' : 'long',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
            })}
          </p>
        </div>
        <div className="w-full">{lastMessage}</div>
      </div>
    </div>
  );
};

export default MessageRow;
