import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pickaxe({
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
          d="M11.431 3.819C9.25 2.2656 7.3594 1.75 5.75 1.75L4.96201 2.366C6.58201 3.585 8.01499 4.80599 9.27399 5.97699"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.023 8.72601C13.194 9.98501 14.415 11.418 15.634 13.038L16.25 12.25C16.25 10.6406 15.7344 8.75 14.181 6.569"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.182 8.81799L4.414 15.586C3.862 16.138 2.966 16.138 2.414 15.586C1.862 15.034 1.862 14.138 2.414 13.586L9.18201 6.81799"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.7047 3.54636L9.16193 6.0891C8.96667 6.28437 8.96667 6.60095 9.16193 6.79621L11.2048 8.83905C11.4 9.03431 11.7166 9.03431 11.9119 8.83905L14.4546 6.29631C14.6499 6.10105 14.6499 5.78446 14.4546 5.5892L12.4118 3.54636C12.2165 3.3511 11.8999 3.3511 11.7047 3.54636Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Pickaxe;
