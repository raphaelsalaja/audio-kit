import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AutomatedLogistics2({
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
          d="M2.75 9H1.75C1.336 9 1 8.664 1 8.25C1 7.836 1.336 7.5 1.75 7.5H2.75C2.888 7.5 3 7.388 3 7.25V3.75C3 3.612 2.888 3.5 2.75 3.5H1.75C1.336 3.5 1 3.164 1 2.75C1 2.336 1.336 2 1.75 2H2.75C3.715 2 4.5 2.785 4.5 3.75V7.25C4.5 8.215 3.715 9 2.75 9Z"
          fill={fill}
        />
        <path
          d="M16.25 9H15.25C14.285 9 13.5 8.215 13.5 7.25V3.75C13.5 2.785 14.285 2 15.25 2H16.25C16.664 2 17 2.336 17 2.75C17 3.164 16.664 3.5 16.25 3.5H15.25C15.112 3.5 15 3.612 15 3.75V7.25C15 7.388 15.112 7.5 15.25 7.5H16.25C16.664 7.5 17 7.836 17 8.25C17 8.664 16.664 9 16.25 9Z"
          fill={fill}
        />
        <path
          d="M14.25 10.5H3.75C2.233 10.5 1 11.733 1 13.25C1 14.767 2.233 16 3.75 16H14.25C15.767 16 17 14.767 17 13.25C17 11.733 15.767 10.5 14.25 10.5ZM5 14.25C4.448 14.25 4 13.802 4 13.25C4 12.698 4.448 12.25 5 12.25C5.552 12.25 6 12.698 6 13.25C6 13.802 5.552 14.25 5 14.25ZM9 14.25C8.448 14.25 8 13.802 8 13.25C8 12.698 8.448 12.25 9 12.25C9.552 12.25 10 12.698 10 13.25C10 13.802 9.552 14.25 9 14.25ZM13 14.25C12.448 14.25 12 13.802 12 13.25C12 12.698 12.448 12.25 13 12.25C13.552 12.25 14 12.698 14 13.25C14 13.802 13.552 14.25 13 14.25Z"
          fill={secondaryfill}
        />
        <path
          d="M10.75 2H9.75V4.5C9.75 4.914 9.414 5.25 9 5.25C8.586 5.25 8.25 4.914 8.25 4.5V2H7.25C6.285 2 5.5 2.785 5.5 3.75V7.25C5.5 8.215 6.285 9 7.25 9H10.75C11.715 9 12.5 8.215 12.5 7.25V3.75C12.5 2.785 11.715 2 10.75 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default AutomatedLogistics2;
