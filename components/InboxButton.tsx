import { FC, MouseEventHandler } from 'react';

type InboxButtonProps = {
  showButton: boolean;
  showLabel: boolean;
  selected: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const InboxButton: FC<InboxButtonProps> = ({
  showButton,
  showLabel,
  selected,
  onClick,
}) => {
  const showHideButton = showButton
    ? '-rotate-0 -translate-x-[5.25rem]'
    : 'rotate-0 translate-x-0 delay-100';

  const showHideLabel = showLabel
    ? 'translate-y-0 opacity-100 delay-150'
    : 'translate-y-12 opacity-0';

  const selectButton = selected
    ? 'w-16 h-16 bg-indicator-purple hover:bg-indicator-purple'
    : 'w-14 h-14';

  return (
    <div
      className={`fixed flex flex-col gap-3 items-center justify-between transition-transform ease-in 
      ${selected ? ' bottom-6 right-8 z-50' : 'bottom-7 right-9'} ${showHideButton}`}
    >
      <p className={`transition-all ease-in duration-100 ${showHideLabel}`}>
        Inbox
      </p>
      <button
        onClick={onClick}
        className={`btn btn-circle transition-all border-none ${selectButton}`}
      >
        <svg
          className={selected ? 'fill-white' : 'fill-indicator-purple'}
          width="24"
          height="23"
          viewBox="0 0 24 23"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.4443 0.110657H1.9999C1.38879 0.110657 0.888794 0.610657 0.888794 1.22177V16.7773L5.33324 12.3329H16.4443C17.0555 12.3329 17.5555 11.8329 17.5555 11.2218V1.22177C17.5555 0.610657 17.0555 0.110657 16.4443 0.110657ZM15.3332 2.3328V10.1106H4.41103L3.75547 10.7661L3.11103 11.4106V2.3328H15.3332ZM19.7777 4.55512H21.9999C22.611 4.55512 23.111 5.05512 23.111 5.66623V22.3329L18.6666 17.8885H6.44435C5.83324 17.8885 5.33324 17.3885 5.33324 16.7773V14.5551H19.7777V4.55512Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default InboxButton;
