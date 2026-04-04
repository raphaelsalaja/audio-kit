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
          fill={fill}
        />
        <path
          d="M1 4.25C1 2.73203 2.23054 1.5 3.75 1.5H14.25C15.7695 1.5 17 2.73203 17 4.25V10.9613L16.2786 10.7211L15.8846 9.53849L15.8842 9.53752C15.5781 8.62101 14.7194 8 13.7501 8C12.781 8 11.9218 8.62076 11.6158 9.53794L11.2215 10.7211L10.0389 11.1149L10.0367 11.1157C9.12014 11.4225 8.50018 12.2806 8.50018 13.25C8.50018 13.7635 8.67411 14.2457 8.97392 14.6313L6.21852 16.8357C5.99339 17.0158 5.68496 17.0509 5.42511 16.926C5.16526 16.8011 5 16.5383 5 16.25V14H3.75C2.23054 14 1 12.768 1 11.25V4.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default MessageSparkle;
