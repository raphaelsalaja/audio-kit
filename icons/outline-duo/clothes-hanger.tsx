import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ClothesHanger({
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
          d="M1.74988 13.5L8.66345 9.24886L16.2499 13.5C16.2499 14.4665 15.4664 15.25 14.4999 15.25H3.49988C2.53338 15.25 1.74988 14.4665 1.74988 13.5Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.74999 5C6.74999 3.5621 8.09749 2.44 9.59919 2.8273C10.3572 3.0228 10.9771 3.6427 11.1726 4.4008C11.5599 5.9025 10.4378 7.25 8.99988 7.25V9.042L1.74988 13.5C1.74988 14.4665 2.53338 15.25 3.49988 15.25H14.4999C15.4664 15.25 16.2499 14.4665 16.2499 13.5L11.374 10.7607"
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

export default ClothesHanger;
