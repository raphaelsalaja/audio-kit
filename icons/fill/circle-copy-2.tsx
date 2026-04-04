import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleCopy2({
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
          d="M7.25 13.5C10.7018 13.5 13.5 10.702 13.5 7.25C13.5 3.798 10.7018 1 7.25 1C3.7982 1 1 3.798 1 7.25C1 10.702 3.7982 13.5 7.25 13.5Z"
          fill={fill}
        />
        <path
          d="M10.7499 17C9.81191 17 8.88861 16.7798 8.00481 16.3452C7.63321 16.1626 7.47991 15.7134 7.66301 15.3413C7.84661 14.9697 8.29681 14.8159 8.66691 14.9995C9.34271 15.3315 10.0434 15.5 10.7499 15.5C13.369 15.5 15.4999 13.3691 15.4999 10.75C15.4999 10.0439 15.3314 9.34331 14.9994 8.66701C14.8168 8.29491 14.9706 7.8457 15.3422 7.6631C15.7152 7.481 16.164 7.63431 16.3461 8.00591C16.7797 8.88971 16.9999 9.813 16.9999 10.75C16.9999 14.1963 14.1962 17 10.7499 17Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default CircleCopy2;
