import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareLock({
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
          d="M2 4.75C2 3.23069 3.23128 2 4.75 2H13.25C14.7687 2 16 3.23069 16 4.75V13.25C16 14.7693 14.7687 16 13.25 16H4.75C3.23128 16 2 14.7693 2 13.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M8.99999 5.26321C7.75726 5.26321 6.75061 6.27035 6.75061 7.51259C6.75061 8.49194 7.37626 9.32515 8.25 9.63397V12.2632C8.25 12.6774 8.58579 13.0132 9 13.0132C9.41421 13.0132 9.75 12.6774 9.75 12.2632V9.63396C10.6237 9.32514 11.2494 8.49193 11.2494 7.51259C11.2494 6.27035 10.2427 5.26321 8.99999 5.26321Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SquareLock;
