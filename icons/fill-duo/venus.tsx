import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Venus({
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
          d="M3.5 6.5C3.5 3.46279 5.96279 1 9 1C12.0372 1 14.5 3.46279 14.5 6.5C14.5 9.53721 12.0372 12 9 12C5.96279 12 3.5 9.53721 3.5 6.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M8.25 13.5V11.9493C8.49523 11.9827 8.7456 12 9 12C9.2544 12 9.50477 11.9827 9.75 11.9493V13.5H11.25C11.6642 13.5 12 13.8358 12 14.25C12 14.6642 11.6642 15 11.25 15H9.75V16.25C9.75 16.6642 9.41421 17 9 17C8.58579 17 8.25 16.6642 8.25 16.25V15H6.75C6.33579 15 6 14.6642 6 14.25C6 13.8358 6.33579 13.5 6.75 13.5H8.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Venus;
