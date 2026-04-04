import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretReduceX({
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
          d="M10.501 9.41399L13.969 11.762C14.301 11.987 14.749 11.749 14.749 11.348V6.65199C14.749 6.25099 14.301 6.01299 13.969 6.23799L10.501 8.58599C10.208 8.78399 10.208 9.21599 10.501 9.41399Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.501 9.41399L13.969 11.762C14.301 11.987 14.749 11.749 14.749 11.348V6.65199C14.749 6.25099 14.301 6.01299 13.969 6.23799L10.501 8.58599C10.208 8.78399 10.208 9.21599 10.501 9.41399Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.49898 9.41399L4.03098 11.762C3.69898 11.987 3.25098 11.749 3.25098 11.348V6.65199C3.25098 6.25099 3.69898 6.01299 4.03098 6.23799L7.49898 8.58599C7.79198 8.78399 7.79198 9.21599 7.49898 9.41399Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7.49898 9.41399L4.03098 11.762C3.69898 11.987 3.25098 11.749 3.25098 11.348V6.65199C3.25098 6.25099 3.69898 6.01299 4.03098 6.23799L7.49898 8.58599C7.79198 8.78399 7.79198 9.21599 7.49898 9.41399Z"
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

export default CaretReduceX;
