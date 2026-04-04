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
          d="M16.9873 12.5381L15.0928 11.9072L14.4615 10.0127C14.3594 9.707 14.0728 9.5 13.7501 9.5C13.4274 9.5 13.1407 9.707 13.0387 10.0127L12.4074 11.9072L10.5129 12.5381C10.2067 12.6406 10.0002 12.9268 10.0002 13.25C10.0002 13.5732 10.2067 13.8594 10.5129 13.9619L12.4074 14.5928L13.0387 16.4873C13.1408 16.793 13.4274 17 13.7501 17C14.0728 17 14.3595 16.793 14.4615 16.4873L15.0928 14.5928L16.9873 13.9619C17.2935 13.8594 17.5 13.5732 17.5 13.25C17.5 12.9268 17.2935 12.6406 16.9873 12.5381Z"
          fill={secondaryfill}
        />
        <path
          d="M9.746 11.236C8.978 11.619 8.5 12.391 8.5 13.25C8.5 13.7648 8.67415 14.2457 8.97391 14.6313L6.219 16.835C6.083 16.944 5.917 17 5.75 17C5.64 17 5.529 16.976 5.425 16.926C5.165 16.801 5 16.538 5 16.25V14H3.75C2.233 14 1 12.767 1 11.25V4.25C1 2.733 2.233 1.5 3.75 1.5H14.25C15.767 1.5 17 2.733 17 4.25V10.9613L16.2787 10.7211L15.8843 9.53752C15.5782 8.62101 14.7195 8 13.7501 8C13.0036 8 12.3222 8.36844 11.9087 8.957C11.7858 9.12968 11.6828 9.33728 11.6158 9.53794L11.2216 10.7211L10.0368 11.1157C9.93618 11.1494 9.83901 11.1896 9.746 11.236Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MessageSparkle;
