import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowSparkle({
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
          d="M14.25 2H3.75C2.233 2 1 3.23 1 4.75V13.25C1 14.77 2.233 16 3.75 16H8.4375C8.8515 16 9.1875 15.66 9.1875 15.25C9.1875 14.84 8.8515 14.5 8.4375 14.5H3.75C3.061 14.5 2.5 13.9399 2.5 13.25V8H15.5V9C15.5 9.42 15.836 9.75 16.25 9.75C16.664 9.75 17 9.42 17 9V4.75C17 3.23 15.767 2 14.25 2ZM4 6C3.448 6 3 5.55 3 5C3 4.45 3.448 4 4 4C4.552 4 5 4.45 5 5C5 5.55 4.552 6 4 6ZM7 6C6.448 6 6 5.55 6 5C6 4.45 6.448 4 7 4C7.552 4 8 4.45 8 5C8 5.55 7.552 6 7 6Z"
          fill={fill}
        />
        <path
          d="M17.487 13.5601L15.593 12.92L14.962 11.0302C14.859 10.7201 14.573 10.5201 14.25 10.5201C13.927 10.5201 13.641 10.7202 13.539 11.0302L12.907 12.92L11.013 13.5601C10.707 13.6601 10.5 13.94 10.5 14.2701C10.5 14.59 10.707 14.8801 11.013 14.9801L12.907 15.6101L13.539 17.5001C13.641 17.8102 13.927 18.0201 14.25 18.0201C14.573 18.0201 14.86 17.8101 14.962 17.5001L15.593 15.6101L17.487 14.9801C17.794 14.8801 18 14.5901 18 14.2701C18 13.94 17.794 13.6601 17.487 13.5601Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default WindowSparkle;
