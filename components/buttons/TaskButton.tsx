import { FC, MouseEventHandler } from 'react';
import { classNames } from '../../lib/utils';

type TaskButtonProps = {
  showButton: boolean;
  showLabel: boolean;
  opened: boolean;
  focused: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const TaskButton: FC<TaskButtonProps> = ({
  showButton,
  showLabel,
  opened,
  focused,
  onClick,
}) => {
  return (
    <div
      className={classNames(
        'fixed flex flex-col gap-3 items-center justify-between transition-transform ease-in select-none',
        showButton && !focused
          ? '-rotate-0 -translate-x-[10.25rem]'
          : 'rotate-0 translate-x-0',
        showButton ? '' : 'delay-100',
        focused ? 'bottom-6 right-8 z-50 translate-x-0' : 'bottom-7 right-9',
      )}
    >
      <p
        className={classNames(
          'transition-all ease-in duration-100 -z-10',
          showLabel
            ? 'translate-y-0 opacity-100 delay-150'
            : 'translate-y-12 opacity-0',
        )}
      >
        Task
      </p>
      <button
        onClick={onClick}
        className={classNames(
          `btn btn-circle transition-all border-none`,
          focused ? 'w-16 h-16' : 'w-14 h-14',
          opened ? 'bg-indicator-orange hover:bg-indicator-orange' : '',
        )}
      >
        <svg
          className={opened ? 'fill-white' : 'fill-indicator-orange'}
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
