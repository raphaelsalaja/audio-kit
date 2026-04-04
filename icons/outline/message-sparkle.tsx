import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MessageSparkle({
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
          d="M16.25 8.5928V4.25C16.25 3.146 15.355 2.25 14.25 2.25H3.75C2.645 2.25 1.75 3.146 1.75 4.25V11.25C1.75 12.354 2.645 13.25 3.75 13.25H5.75V16.25L8.00031 14.4501"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.9873 12.5381L15.0928 11.9072L14.4615 10.0127C14.3594 9.707 14.0728 9.5 13.7501 9.5C13.4274 9.5 13.1407 9.707 13.0387 10.0127L12.4074 11.9072L10.5129 12.5381C10.2067 12.6406 10.0002 12.9268 10.0002 13.25C10.0002 13.5732 10.2067 13.8594 10.5129 13.9619L12.4074 14.5928L13.0387 16.4873C13.1408 16.793 13.4274 17 13.7501 17C14.0728 17 14.3595 16.793 14.4615 16.4873L15.0928 14.5928L16.9873 13.9619C17.2935 13.8594 17.5 13.5732 17.5 13.25C17.5 12.9268 17.2935 12.6406 16.9873 12.5381Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default MessageSparkle;
