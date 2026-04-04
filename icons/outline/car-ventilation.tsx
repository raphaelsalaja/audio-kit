import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CarVentilation({
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
          d="M10.937 7.75C10.055 8.797 9.72198 9.742 9.93898 10.583C10.26 11.831 11.614 12.166 11.936 13.416C12.153 14.258 11.82 15.202 10.938 16.249"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.8492 12.708C15.1495 12.8044 15.4497 12.8887 15.75 13V3.99999C11.25 2.33329 6.75 2.33329 2.25 3.99999V13C2.7219 12.8252 3.1937 12.6794 3.6655 12.5413"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.06197 7.75C6.17997 8.797 5.84698 9.742 6.06398 10.583C6.38498 11.831 7.73897 12.166 8.06097 13.416C8.27797 14.258 7.94498 15.202 7.06298 16.249"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default CarVentilation;
