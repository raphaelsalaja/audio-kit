import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Heading1({
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
          d="M2.75 4C3.16421 4 3.5 4.33579 3.5 4.75V8.25L8 8.25001V4.75C8 4.33579 8.33579 4 8.75 4C9.16421 4 9.5 4.33579 9.5 4.75V13.25C9.5 13.6642 9.16421 14 8.75 14C8.33579 14 8 13.6642 8 13.25V9.75001L3.5 9.75V13.25C3.5 13.6642 3.16421 14 2.75 14C2.33579 14 2 13.6642 2 13.25V4.75C2 4.33579 2.33579 4 2.75 4Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M14.9417 4.02493C15.2708 4.11194 15.5 4.40963 15.5 4.75001V13.25C15.5 13.6642 15.1642 14 14.75 14C14.3358 14 14 13.6642 14 13.25V6.63977C13.4564 7.04539 12.7422 7.42424 11.8508 7.59466C11.444 7.67245 11.0511 7.40569 10.9734 6.99885C10.8956 6.59201 11.1623 6.19914 11.5692 6.12135C12.4224 5.95822 13.0577 5.52192 13.4876 5.11265C13.7019 4.9087 13.8602 4.71599 13.963 4.57727C14.0112 4.51216 14.0583 4.44562 14.0999 4.376C14.2689 4.08233 14.6139 3.93824 14.9417 4.02493Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Heading1;
