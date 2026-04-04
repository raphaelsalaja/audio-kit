import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Notepad({
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
          d="M13.25 2H13V1.25C13 0.836 12.664 0.5 12.25 0.5C11.836 0.5 11.5 0.836 11.5 1.25V2H9.75V1.25C9.75 0.836 9.414 0.5 9 0.5C8.586 0.5 8.25 0.836 8.25 1.25V2H6.5V1.25C6.5 0.836 6.164 0.5 5.75 0.5C5.336 0.5 5 0.836 5 1.25V2H4.75C3.233 2 2 3.233 2 4.75V14.25C2 15.767 3.233 17 4.75 17H13.25C14.767 17 16 15.767 16 14.25V4.75C16 3.233 14.767 2 13.25 2ZM12.5 10.25C12.5 10.664 12.164 11 11.75 11H6.25C5.836 11 5.5 10.664 5.5 10.25V7.25C5.5 6.836 5.836 6.5 6.25 6.5H11.75C12.164 6.5 12.5 6.836 12.5 7.25V10.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Notepad;
