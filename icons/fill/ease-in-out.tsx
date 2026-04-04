import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EaseInOut({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M15.25 4C15.664 4 16 3.664 16 3.25C16 2.836 15.664 2.5 15.25 2.5C10.058 2.5 9.112 5.845 8.278 8.796C7.456 11.704 6.807 14 2.75 14C2.336 14 2 14.336 2 14.75C2 15.164 2.336 15.5 2.75 15.5C7.942 15.5 8.888 12.155 9.722 9.204C10.544 6.296 11.193 4 15.25 4Z"
          fill={fill}
        />
        <path
          d="M12.6455 15H9.75C9.33579 15 9 14.6642 9 14.25C9 13.8358 9.33579 13.5 9.75 13.5H12.6455C12.9423 12.7672 13.661 12.25 14.5 12.25C15.6042 12.25 16.5 13.1458 16.5 14.25C16.5 15.3542 15.6042 16.25 14.5 16.25C13.661 16.25 12.9423 15.7328 12.6455 15Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M3.49594 1.75C2.39177 1.75 1.49594 2.64583 1.49594 3.75C1.49594 4.85417 2.39177 5.75 3.49594 5.75C4.33492 5.75 5.05361 5.23281 5.35044 4.5H8.25C8.66421 4.5 9 4.16421 9 3.75C9 3.33579 8.66421 3 8.25 3H5.35044C5.05361 2.26719 4.33492 1.75 3.49594 1.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default EaseInOut;
