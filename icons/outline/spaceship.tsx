import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Spaceship({
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
          d="M5.071,10.556l-1.233,.746c-.664,.401-1.036,1.149-.956,1.92l.368,3.528,3.151-2"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.929,10.556l1.233,.746c.664,.401,1.036,1.149,.956,1.92l-.368,3.528-3.151-2"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9,14.75h2.599c.371-.672,2.328-4.368,.866-8.651-.892-2.612-2.625-4.183-3.465-4.849-.839,.666-2.573,2.237-3.465,4.849-1.462,4.283,.495,7.979,.866,8.651,0,0,2.599,0,2.599,0Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="9"
          x2="9"
          y1="16.75"
          y2="11.25"
        />
        <circle cx="9" cy="7.75" fill={secondaryfill} r="1.25" stroke="none" />
      </g>
    </svg>
  );
}

export default Spaceship;
