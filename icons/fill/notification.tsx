import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Notification({
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
          d="M14.5 6C15.8807 6 17 4.88071 17 3.5C17 2.11929 15.8807 1 14.5 1C13.1193 1 12 2.11929 12 3.5C12 4.88071 13.1193 6 14.5 6Z"
          fill={secondaryfill}
        />
        <path
          d="M4.25 4C3.55921 4 3 4.55921 3 5.25V13.75C3 14.4408 3.55921 15 4.25 15H12.75C13.4408 15 14 14.4408 14 13.75V8.7435C14 8.32929 14.3358 7.9935 14.75 7.9935C15.1642 7.9935 15.5 8.32929 15.5 8.7435V13.75C15.5 15.2692 14.2692 16.5 12.75 16.5H4.25C2.73079 16.5 1.5 15.2692 1.5 13.75V5.25C1.5 3.73079 2.73079 2.5 4.25 2.5H9.2565C9.67071 2.5 10.0065 2.83579 10.0065 3.25C10.0065 3.66421 9.67071 4 9.2565 4H4.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Notification;
