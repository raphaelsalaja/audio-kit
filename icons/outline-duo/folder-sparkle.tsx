import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderSparkle({
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
          d="M13.75 6.75C14.855 6.75 15.75 7.645 15.75 8.75L15.291 9.61133C14.9255 9.26761 14.4486 9.04838 13.9307 9.00684L13.75 9C12.8418 9.00009 12.0299 9.54552 11.6797 10.3691L11.2207 11.7207L10.0361 12.1152C9.11978 12.4222 8.5 13.2807 8.5 14.25C8.5 14.5092 8.53083 14.7729 8.61328 15.0078L4.25 15.25C3.145 15.25 2.25 14.355 2.25 13.25V8.75C2.25 7.645 3.145 6.75 4.25 6.75H13.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.25 8.75V4.75C2.25 3.645 3.145 2.75 4.25 2.75H6.201C6.808 2.75 7.381 3.025 7.761 3.498L8.364 4.25H13.75C14.855 4.25 15.75 5.145 15.75 6.25V9.094"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 8.75C15.75 7.646 14.855 6.75 13.75 6.75H4.25C3.145 6.75 2.25 7.646 2.25 8.75V13.25C2.25 14.354 3.145 15.25 4.25 15.25H7.9216"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.9873 13.5381L15.0928 12.9072L14.4615 11.0127C14.3594 10.707 14.0728 10.5 13.7501 10.5C13.4274 10.5 13.1407 10.707 13.0387 11.0127L12.4074 12.9072L10.5129 13.5381C10.2067 13.6406 10.0002 13.9268 10.0002 14.25C10.0002 14.5732 10.2067 14.8594 10.5129 14.9619L12.4074 15.5928L13.0387 17.4873C13.1408 17.793 13.4274 18 13.7501 18C14.0728 18 14.3595 17.793 14.4615 17.4873L15.0928 15.5928L16.9873 14.9619C17.2935 14.8594 17.5 14.5732 17.5 14.25C17.5 13.9268 17.2935 13.6406 16.9873 13.5381Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default FolderSparkle;
