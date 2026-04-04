import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Gamepad6({
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
          d="M4.75 5C2.12679 5 0 7.12679 0 9.75C0 12.3732 2.12679 14.5 4.75 14.5C5.84857 14.5 6.84422 14.1165 7.63874 13.5H10.3603C11.155 14.1165 12.1514 14.5 13.249 14.5C15.8722 14.5 17.999 12.3732 17.999 9.75C17.999 7.12712 15.8728 5.00054 13.25 5H4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M14.25 9.75C14.664 9.75 15 9.4142 15 9C15 8.5858 14.664 8.25 14.25 8.25C13.836 8.25 13.5 8.5858 13.5 9C13.5 9.4142 13.836 9.75 14.25 9.75Z"
          fill={fill}
        />
        <path
          d="M12.75 11.25C13.164 11.25 13.5 10.9142 13.5 10.5C13.5 10.0858 13.164 9.75 12.75 9.75C12.336 9.75 12 10.0858 12 10.5C12 10.9142 12.336 11.25 12.75 11.25Z"
          fill={fill}
        />
        <path
          d="M5.5 8.25C5.5 7.83579 5.16421 7.5 4.75 7.5C4.33579 7.5 4 7.83579 4 8.25V9H3.25C2.83579 9 2.5 9.33579 2.5 9.75C2.5 10.1642 2.83579 10.5 3.25 10.5H4V11.25C4 11.6642 4.33579 12 4.75 12C5.16421 12 5.5 11.6642 5.5 11.25V10.5H6.25C6.66421 10.5 7 10.1642 7 9.75C7 9.33579 6.66421 9 6.25 9H5.5V8.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M15 1.5C15 1.08579 14.6642 0.75 14.25 0.75C13.8358 0.75 13.5 1.08579 13.5 1.5C13.5 2.05179 13.0518 2.5 12.5 2.5H10.75C9.36979 2.5 8.25 3.61979 8.25 5H9.75C9.75 4.44821 10.1982 4 10.75 4H12.5C13.8802 4 15 2.88021 15 1.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Gamepad6;
