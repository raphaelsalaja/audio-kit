import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Mailbox({
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
          d="M13.71 4.8C13.902 4.435 14.355 4.291 14.723 4.485C16.127 5.222 17 6.665 17 8.25V13.25C17 14.215 16.215 15 15.25 15H9.5V16.25C9.5 16.664 9.164 17 8.75 17C8.336 17 8 16.664 8 16.25V15H2.75C1.785 15 1 14.215 1 13.25V8.25C1 5.907 2.906 4 5.25 4H10.75C11.164 4 11.5 4.336 11.5 4.75C11.5 5.164 11.164 5.5 10.75 5.5H8.463C9.101 6.243 9.5 7.197 9.5 8.25V13.25C9.5 13.335 9.487 13.418 9.475 13.5H15.25C15.388 13.5 15.5 13.388 15.5 13.25V8.25C15.5 7.224 14.934 6.291 14.025 5.813C13.658 5.62 13.518 5.167 13.71 4.8ZM6 8.25C6 7.83579 5.66421 7.5 5.25 7.5C4.83579 7.5 4.5 7.83579 4.5 8.25V9.75C4.5 10.1642 4.83579 10.5 5.25 10.5C5.66421 10.5 6 10.1642 6 9.75V8.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M14.25 0H11.25C10.836 0 10.5 0.336 10.5 0.75V6.25C10.5 6.664 10.836 7 11.25 7C11.664 7 12 6.664 12 6.25V3H14.25C14.664 3 15 2.664 15 2.25V0.75C15 0.336 14.664 0 14.25 0Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Mailbox;
