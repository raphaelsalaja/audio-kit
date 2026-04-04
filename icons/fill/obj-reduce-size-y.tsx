import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ObjReduceSizeY({
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
          d="M13.25 5C14.7692 5 16 6.23079 16 7.75L16 10.25C16 11.7692 14.7692 13 13.25 13L4.75 13C3.23079 13 2 11.7692 2 10.25L2 7.75C2 6.23079 3.23079 5 4.75 5L13.25 5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M7.059 17.074C7.169 17.332 7.415 17.5 7.684 17.5L10.316 17.5C10.585 17.5 10.83 17.333 10.94 17.075C11.05 16.817 11.006 16.513 10.827 16.301L9.51097 14.742C9.38097 14.588 9.19501 14.499 8.99901 14.499C8.80301 14.499 8.61696 14.588 8.48796 14.741L7.172 16.3C6.993 16.511 6.949 16.815 7.059 17.074Z"
          fill={secondaryfill}
        />
        <path
          d="M7.059 0.925995C7.169 0.667995 7.415 0.5 7.684 0.5L10.316 0.5C10.585 0.5 10.83 0.667003 10.94 0.925003C11.05 1.183 11.006 1.48701 10.827 1.69901L9.51097 3.258C9.38097 3.412 9.19501 3.50101 8.99901 3.50101C8.80401 3.50101 8.61696 3.412 8.48796 3.259L7.172 1.7C6.993 1.489 6.949 1.18499 7.059 0.925995Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default ObjReduceSizeY;
