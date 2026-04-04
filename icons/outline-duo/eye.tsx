import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Eye({
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
          d="M15.9557 7.88669C15.0087 6.21479 12.7943 3.25 9 3.25C5.2057 3.25 2.9913 6.21479 2.0443 7.88669C1.6519 8.57929 1.6519 9.42041 2.0443 10.1133C2.9913 11.7849 5.2056 14.75 9 14.75C12.7944 14.75 15.0088 11.7849 15.9557 10.1133C16.348 9.42041 16.348 8.57939 15.9557 7.88669ZM9 11.75C7.4813 11.75 6.25 10.5188 6.25 9C6.25 7.4812 7.4813 6.25 9 6.25C10.5187 6.25 11.75 7.4812 11.75 9C11.75 10.5188 10.5188 11.75 9 11.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M9 11.75C10.5188 11.75 11.75 10.5188 11.75 9C11.75 7.48122 10.5188 6.25 9 6.25C7.48122 6.25 6.25 7.48122 6.25 9C6.25 10.5188 7.48122 11.75 9 11.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.9557 7.88669C16.3481 8.57939 16.3481 9.42049 15.9557 10.1132C15.0087 11.7849 12.7944 14.4999 9 14.4999C5.2056 14.4999 2.9912 11.7849 2.0443 10.1132C1.6519 9.42049 1.6519 8.57939 2.0443 7.88669C2.9913 6.21499 5.2056 3.5 9 3.5C12.7944 3.5 15.0088 6.21499 15.9557 7.88669Z"
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

export default Eye;
