import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Atom2({
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
          d="M7.32556 6.14043L5.69412 9.03087L7.34329 11.8682L10.6948 11.8504L12.2908 8.97769L10.6416 6.12268L7.32556 6.14043Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.36501 4.06503C4.38701 3.20403 4.63401 2.57203 5.12501 2.28803C6.53101 1.47603 9.40601 3.82303 11.546 7.53003C11.831 8.02303 12.088 8.51503 12.317 9.00003"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.409 10.547C1.674 10.098 1.25 9.568 1.25 9C1.25 7.376 4.72 6.06 9 6.06C9.569 6.06 10.124 6.083 10.658 6.127"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.044 15.482C6.288 15.893 5.617 15.996 5.125 15.712C3.719 14.9 4.314 11.237 6.454 7.52999C6.739 7.03699 7.036 6.56799 7.342 6.12799"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.635 13.935C13.613 14.796 13.366 15.428 12.875 15.712C11.469 16.524 8.594 14.177 6.454 10.47C6.169 9.977 5.912 9.485 5.683 9"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.591 7.453C16.326 7.902 16.75 8.432 16.75 9C16.75 10.624 13.28 11.94 9 11.94C8.431 11.94 7.876 11.917 7.342 11.873"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.956 2.51801C11.712 2.10701 12.383 2.00401 12.875 2.28801C14.281 3.10001 13.686 6.76301 11.546 10.47C11.261 10.963 10.964 11.432 10.658 11.872"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 10C9.55228 10 10 9.55228 10 9C10 8.44772 9.55228 8 9 8C8.44772 8 8 8.44772 8 9C8 9.55228 8.44772 10 9 10Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Atom2;
