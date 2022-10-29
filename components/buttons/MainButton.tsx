import { FC, MouseEventHandler, useState } from 'react';
import InboxButton from './InboxButton';
import TaskButton from './TaskButton';

type MainButtonProps = {
  show: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const MainButton: FC<MainButtonProps> = ({ show, onClick }) => {
  return (
    <div className={`fixed bottom-6 right-8 transition-transform ${show ? 'translate-x-0' : '-translate-x-4'}`}>
      <button
        onClick={onClick}
        className={`btn btn-circle btn-lg transition-colors ${show ? 'btn-primary' : 'btn-secondary'}`}
      >
        <svg
          className="fill-white"
          width="18"
          height="32"
          viewBox="0 0 18 32"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.4427 0.335868C13.3618 0.948573 13.6101 2.19031 12.9974 3.10937L5.73704 14H16C16.7376 14 17.4153 14.4059 17.7634 15.0563C18.1114 15.7066 18.0732 16.4957 17.6641 17.1094L8.33077 31.1094C7.71807 32.0284 6.47633 32.2768 5.55727 31.6641C4.63821 31.0514 4.38986 29.8096 5.00257 28.8906L12.263 18H2C1.26241 18 0.584692 17.594 0.236654 16.9437C-0.111384 16.2934 -0.0732391 15.5043 0.335902 14.8906L9.66924 0.890568C10.2819 -0.0284895 11.5237 -0.276837 12.4427 0.335868Z"
          />
        </svg>
      </button>
    </div>
  );
}

export default MainButton;
