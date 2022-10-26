import { FC, MouseEventHandler } from 'react';

type TaskButtonProps = {
  showButton: boolean;
  showLabel: boolean;
  selected: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const TaskButton: FC<TaskButtonProps> = ({
  showButton,
  showLabel,
  selected,
  onClick,
}) => {
  const showHideButton = showButton
    ? '-rotate-0 -translate-x-[10.25rem]'
    : 'rotate-0 translate-x-0 delay-100';

  const showHideLabel = showLabel
    ? 'translate-y-0 opacity-100 delay-150'
    : 'translate-y-12 opacity-0';

  const selectButton = selected
    ? 'w-16 h-16 bg-indicator-orange hover:bg-indicator-orange'
    : 'w-14 h-14';

  return (
    <div
      className={`fixed flex flex-col gap-3 items-center justify-between transition-transform ease-in 
      ${selected ? ' bottom-6 right-8 z-50' : 'bottom-7 right-9'} ${showHideButton}`}
    >
      <p className={`transition-all ease-in duration-100 ${showHideLabel}`}>
        Task
      </p>
      <button onClick={onClick} className={`btn btn-circle transition-all border-none ${selectButton}`}>
        <svg
          className={selected ? 'fill-white' : 'fill-indicator-orange'}
          width="26"
          height="20"
          viewBox="0 0 26 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.11114 0.666687H23.1111C24.3334 0.666687 25.3334 1.66669 25.3334 2.88891V17.3334C25.3334 18.5556 24.3334 19.5556 23.1111 19.5556H3.11114C1.88892 19.5556 0.888916 18.5556 0.888916 17.3334V2.88891C0.888916 1.66669 1.88892 0.666687 3.11114 0.666687ZM3.11114 2.88891V17.3334H12V2.88891H3.11114ZM23.1111 17.3334H14.2222V2.88891H23.1111V17.3334ZM22 6.7778H15.3334V8.44446H22V6.7778ZM15.3334 9.55558H22V11.2222H15.3334V9.55558ZM22 12.3334H15.3334V14H22V12.3334Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default TaskButton;
